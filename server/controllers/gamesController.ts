import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { findGamesByWeeknumber, saveGame } from '../db/services/gameService'
import { NewGame } from '../db/models/gameModel'

async function postGamesHandler(
  req: FastifyRequest<{ Body: NewGame }>,
  reply: FastifyReply
) {
  try {
    const savedGame = await saveGame(req.body)
    reply.status(201).header('Location', savedGame._id).send(savedGame)
  } catch (error: any) {
    reply.status(500).type('text/html').send(error)
  }
}

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
  app.post<{ Body: NewGame }>('/games', postGamesHandler)
}

export default registerGamesController
