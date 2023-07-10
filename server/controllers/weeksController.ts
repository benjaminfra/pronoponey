import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  findAllWeeksAndSortByWeekNumber,
  createWeek
} from '../db/services/weekService'
import { IWeek } from '../db/models/weekModel'

function getWeeksHandler(_req: FastifyRequest, reply: FastifyReply) {
  findAllWeeksAndSortByWeekNumber()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

async function postWeeksHandler(
  req: FastifyRequest<{ Body: IWeek }>,
  reply: FastifyReply
) {
  try {
    const savedWeek = await createWeek(req.body)
    reply.status(200).send(savedWeek)
  } catch (error) {
    reply
      .status(500)
      .send("Une erreur s'est produite lors de la création de la journée")
  }
}

const registerWeeksController = (app: FastifyInstance) => {
  app.get('/weeks', getWeeksHandler)
  app.post<{ Body: IWeek }>(
    '/weeks',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    postWeeksHandler
  )
}

export default registerWeeksController
