import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { MultipartValue } from '@fastify/multipart'
import { ObjectId } from '@fastify/mongodb'
import { ensure } from '../../helpers/types.helpers'
import {
  findAllTeams,
  createTeam,
  deleteTeam
} from '../db/services/teamService'
import { deleteFile, uploadFile } from '../upload/uploadService'

function getTeamsHandler(_req: any, reply: FastifyReply) {
  findAllTeams()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

const postTeams = async (req: FastifyRequest, reply: FastifyReply) => {
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

const deleteTeams = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return await reply.status(400).send('ID de ressource invalide')
    }
    const deletedTeam = await deleteTeam(req.params.id)
    if (!deletedTeam) {
      return await reply
        .status(404)
        .send('Aucune équipe correspondant à la requête')
    }
    await deleteFile(deletedTeam.logoURI)
    return await reply.status(204).send()
  } catch (error) {
    return await reply
      .status(500)
      .send("Une erreur s'est produite lors de la suppresison de l'équipe")
  }
}

const registerTeamController = (app: FastifyInstance): void => {
  app.post(
    '/teams',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    postTeams
  )
  app.delete<{ Params: { id: string } }>(
    '/teams/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    deleteTeams
  )
  app.get('/teams', getTeamsHandler)
}

export default registerTeamController
