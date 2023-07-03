import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { findGamesByWeeknumber } from '../db/services/gameService'

function getGamesHandler(
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

const registerGamesController = (app: FastifyInstance): void => {
  app.get<{ Querystring: { weekNumber: number } }>('/games', getGamesHandler)
}

export default registerGamesController