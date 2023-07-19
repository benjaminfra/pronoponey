import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import {
  deleteGame,
  findGamesByWeeknumber,
  saveGame,
  updateGame
} from '../db/services/gameService'
import { NewGame, UpdateGame } from '../db/models/gameModel'

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

async function deleteGamesHandler(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    await deleteGame(req.params.id)
    reply.status(204).send()
  } catch (error) {
    reply.status(500).type('text/html').send(error)
  }
}

async function putGamesHandler(
  req: FastifyRequest<{ Params: { id: string }; Body: UpdateGame }>,
  reply: FastifyReply
) {
  try {
    const updatedGame = await updateGame(req.params.id, req.body)
    if (!updateGame) {
      reply.status(404).send('Match non trouvé')
      return
    }

    reply.status(200).send(updatedGame)
  } catch (error) {
    reply.status(500).type('text/html').send(error)
  }
}

const registerGamesController = (app: FastifyInstance): void => {
  app.get<{ Querystring: { weekNumber: number } }>('/games', getGamesHandler)
  app.post<{ Body: NewGame }>('/games', postGamesHandler)
  app.delete<{ Params: { id: string } }>(
    '/games/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    deleteGamesHandler
  )
  app.put<{ Params: { id: string }; Body: UpdateGame }>(
    '/games/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    putGamesHandler
  )
}

export default registerGamesController
