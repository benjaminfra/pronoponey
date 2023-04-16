import { FastifyReply, FastifyRequest } from 'fastify'
import { ensure } from '../../helpers/types.helpers'
import { Roles } from '../db/models/userModel'
import { findAllTeams, createTeam } from '../db/services/teamService'
import { uploadFileToPublic } from '../upload/uploadService'
import { MultipartValue } from '@fastify/multipart'

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
  if (req.user.role !== Roles.Admin) {
    reply.status(403).send('Forbidden')
    return
  }

  try {
    const data = await req.file()
    if (!data) {
      reply.status(500).send('Aucun fichier envoyé')
      return
    }
    await uploadFileToPublic(data)
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
