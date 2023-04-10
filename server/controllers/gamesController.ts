import { FastifyRequest, FastifyReply } from 'fastify'
import { findGamesByWeeknumber } from '../db/services/gameService'

export function getGamesHandler(
  req: FastifyRequest<{ Querystring: { weekNumber: number } }>,
  reply: FastifyReply
) {
  const { weekNumber } = req.query
  findGamesByWeeknumber(weekNumber)
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
