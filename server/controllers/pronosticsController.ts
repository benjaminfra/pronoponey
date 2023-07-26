import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { NewPronostic, Pronostic } from '../db/models/pronosticModel'
import {
  findPronosticByWeekNumber,
  savePronostic
} from '../db/services/pronosticService'

const postPronosticsHandler = async (
  req: FastifyRequest<{ Body: NewPronostic }>,
  reply: FastifyReply
) => {
  const pronostic = new Pronostic({
    awayScore: req.body.awayScore,
    homeScore: req.body.homeScore,
    gameId: req.body.gameId,
    userId: req.user._id,
    weekNumber: req.body.weekNumber
  })
  try {
    const savedPronostic = await savePronostic(pronostic)
    reply
      .status(201)
      .header('Location', savedPronostic._id)
      .send(savedPronostic)
  } catch (error) {
    reply.status(500).type('text/html').send(error)
  }
}

const getPronosticsByWeekNumberHandler = (
  req: FastifyRequest<{ Querystring: { weekNumber: number } }>,
  reply: FastifyReply
) => {
  findPronosticByWeekNumber(req.query.weekNumber, req.user._id)
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

const registerPronosticController = (app: FastifyInstance) => {
  app.post<{ Body: NewPronostic }>(
    '/pronostic',
    { preHandler: app.auth([app.asyncVerifyJWTandLevel]) },
    postPronosticsHandler
  )

  app.get<{ Querystring: { weekNumber: number } }>(
    '/pronostic',
    { preHandler: app.auth([app.asyncVerifyJWTandLevel]) },
    getPronosticsByWeekNumberHandler
  )
}

export default registerPronosticController
