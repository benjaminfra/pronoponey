import { FastifyRequest, FastifyReply } from 'fastify'
import { IPronostic, Pronostic } from '../db/models/pronosticModel'
import { savePronostic } from '../db/services/pronosticService'

export const postPronosticsHandler = async (
  req: FastifyRequest<{ Body: IPronostic }>,
  reply: FastifyReply
) => {
  const pronostic = new Pronostic(req.body)
  savePronostic(pronostic)
    .then(() => {
      reply.status(204).send()
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
