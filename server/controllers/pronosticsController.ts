import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { PronosticProps } from '../../pages/play/types'
import { Pronostic } from '../db/models/pronosticModel'
import {
  findPronosticByWeekNumber,
  savePronostic
} from '../db/services/pronosticService'

const postPronosticsHandler = async (
  req: FastifyRequest<{ Body: PronosticProps }>,
  reply: FastifyReply
) => {
  const pronostic = new Pronostic({
    awayScore: req.body.awayScore,
    homeScore: req.body.homeScore,
    gameId: req.body.gameId,
    userId: req.user._id,
    weekNumber: req.body.weekNumber
  })
  savePronostic(pronostic)
    .then(() => {
      reply.status(204).send()
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
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
  app.post<{ Body: PronosticProps }>(
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
