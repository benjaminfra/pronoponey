import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { Types } from 'mongoose'
import {
  findAllWeeksAndSortByWeekNumber,
  createWeek,
  getWeek,
  deleteWeek,
  updateWeek
} from '../db/services/weekService'
import { IWeek, UpdateWeek } from '../db/models/weekModel'

function getWeeksHandler(_req: FastifyRequest, reply: FastifyReply) {
  findAllWeeksAndSortByWeekNumber()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

async function getWeekHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params
    const week = await getWeek(new Types.ObjectId(id))
    if (!week) {
      reply.status(404).send('Week not found')
      return
    }
    reply.status(200).send(week)
  } catch (error: any) {
    reply.status(500).type('text/html').send(error)
  }
}

async function postWeeksHandler(
  req: FastifyRequest<{ Body: IWeek }>,
  reply: FastifyReply
) {
  try {
    const savedWeek = await createWeek(req.body)
    reply.status(201).header('Location', savedWeek._id).send(savedWeek)
  } catch (error: any) {
    if (error.code === 11000) {
      reply.status(400).type('text/html').send(error)
    } else {
      reply
        .status(500)
        .send("Une erreur s'est produite lors de la création de la journée")
    }
  }
}

async function deleteWeeksHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    await deleteWeek(new Types.ObjectId(req.params.id))
    reply.status(204).send()
  } catch (error: any) {
    reply.status(500).type('text/html').send(error)
  }
}

async function putWeeksHandler(
  req: FastifyRequest<{ Body: UpdateWeek; Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const updatedWeek = await updateWeek(req.params.id, req.body)
    if (!updatedWeek) {
      reply.status(404).send('Journée non trouvée')
      return
    }
    reply.status(200).send(updatedWeek)
  } catch (error: any) {
    if (error.code === 11000) {
      reply
        .status(400)
        .type('text/html')
        .send(`La journée ${req.body.weekNumber} existe déjà`)
    } else {
      reply.status(500).type('text/html').send(error)
    }
  }
}

const registerWeeksController = (app: FastifyInstance) => {
  app.get('/weeks', getWeeksHandler)
  app.post<{ Body: IWeek }>(
    '/weeks',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    postWeeksHandler
  )
  app.get<{ Params: { id: string } }>('/weeks/:id', getWeekHandler)
  app.delete<{ Params: { id: string } }>(
    '/weeks/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    deleteWeeksHandler
  )
  app.put<{ Body: UpdateWeek; Params: { id: string } }>(
    '/weeks/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    putWeeksHandler
  )
}

export default registerWeeksController
