import { FastifyRequest, FastifyReply } from 'fastify'
import { findGamesByWeeknumber } from '../db/services/gameService'

interface IQueryString {
  weekNumber: number
}

export function getGamesHandler(
  req: FastifyRequest<{ Querystring: IQueryString }>,
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
