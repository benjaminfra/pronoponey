import { FastifyRequest, FastifyReply } from 'fastify'
import { PronosticProps } from '../../pages/play/types'
import { Pronostic } from '../db/models/pronosticModel'
import { savePronostic } from '../db/services/pronosticService'

export const postPronosticsHandler = async (
  req: FastifyRequest<{ Body: PronosticProps }>,
  reply: FastifyReply
) => {
  const pronostic = new Pronostic({
    awayScore: req.body.awayScore,
    homeScore: req.body.homeScore,
    gameId: req.body.gameId,
    userId: req.user._id,
    weekNumber: req.body.weekNumber,
  })
  savePronostic(pronostic)
    .then(() => {
      reply.status(204).send()
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
