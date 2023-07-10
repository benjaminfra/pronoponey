import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { MultipartFile, MultipartValue } from '@fastify/multipart'
import { ObjectId } from '@fastify/mongodb'
import { ensure } from '../../helpers/types.helpers'
import {
  findAllTeams,
  createTeam,
  deleteTeam,
  updateTeam
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

const getParts = async (req: FastifyRequest) => {
  let name: string | undefined
  let shortname: string | undefined
  let filePart: MultipartFile | undefined
  // eslint-disable-next-line no-restricted-syntax
  for await (const part of req.parts()) {
    if (part.fields && part.fields.name) {
      const namePart = ensure(part.fields.name) as MultipartValue<string>
      name = namePart.value
    }
    if (part.fields && part.fields.shortname) {
      const shortnamePart = ensure(
        part.fields.shortname
      ) as MultipartValue<string>
      shortname = shortnamePart.value
    }
    if (part.type === 'file') {
      filePart = part
    }
  }
  return { name, shortname, filePart }
}

const putTeams = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  try {
    const parts = await getParts(req)
    if (!parts.name && !parts.shortname && !parts.filePart) {
      reply.status(500).send('Aucune modification envoyée')
      return
    }
    if (parts.filePart) {
      await uploadFile(parts.filePart)
    }
    const updatedTeam = await updateTeam(
      req.params.id,
      parts.name,
      parts.shortname,
      parts.filePart ? parts.filePart.filename : undefined
    )

    reply.status(200).send(updatedTeam)
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
  app.put<{ Params: { id: string } }>(
    '/teams/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    putTeams
  )
}

export default registerTeamController
