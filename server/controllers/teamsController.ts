import { FastifyReply, FastifyRequest } from 'fastify'
import { ensure } from '../../helpers/types.helpers'
import {
  findAllTeams,
  createTeam,
  deleteTeam,
} from '../db/services/teamService'
import { deleteFile, uploadFile } from '../upload/uploadService'
import { MultipartValue } from '@fastify/multipart'
import { Types } from 'mongoose'

export function getTeamsHandler(_req: any, reply: FastifyReply) {
  findAllTeams()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

export const postTeams = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = await req.file()
    if (!data) {
      reply.status(500).send('Aucun fichier envoyé')
      return
    }
    await uploadFile(data)
    const name = ensure(data.fields.name) as MultipartValue<string>
    const shortname = ensure(data.fields.shortname) as MultipartValue<string>
    const createdTeam = await createTeam(
      name.value,
      shortname.value,
      data.filename
    )

    reply.status(200).send(createdTeam)
  } catch (error) {
    reply
      .status(500)
      .send("Une erreur s'est produite lors du téléchargement du fichier.")
  }
}

export const deleteTeams = async (
  req: FastifyRequest<{ Params: { id: Types.ObjectId } }>,
  reply: FastifyReply
) => {
  try {
    const deletedTeam = await deleteTeam(req.params.id)
    if (!deletedTeam) {
      reply.status(404).send('Aucune équipe correspondant à la requête')
      return
    }
    await deleteFile(deletedTeam.logoURI)
    reply.status(204).send()
  } catch (error) {
    reply
      .status(500)
      .send("Une erreur s'est produite lors de la suppresison de l'équipe")
  }
}
