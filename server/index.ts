import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import fastifyAuth from '@fastify/auth'
import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import path from 'path'
import vite from 'vite'
import { renderPage } from 'vite-plugin-ssr'
import mongoose from 'mongoose'
import { getWeeksHandler } from './controllers/weeksController'
import { getGamesHandler } from './controllers/gamesController'
import { getTeamsHandler } from './controllers/teamsController'
import {
  asyncVerifyJWTandLevel,
  asyncVerifyUserAndPassword,
  registerHandler,
  loginHandler,
} from './controllers/usersController'
import { IUser } from './db/models/userModel'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = fastify()

  await app.register(middie)
  await app.register(compress)
  await app
    .decorate('asyncVerifyJWTandLevel', asyncVerifyJWTandLevel)
    .decorate('asyncVerifyUserAndPassword', asyncVerifyUserAndPassword)
    .register(fastifyAuth)
  await app.register(fastifyCookie)

  await mongoose.connect(
    'mongodb+srv://bfrancheteau:0ZX8CgjUJZGe7mDz@cluster0.hnoou.mongodb.net/pronostic_game_db?retryWrites=true&w=majority'
  )

  if (isProduction) {
    const distPath = path.join(root, '/dist/client/assets')
    app.register(fastifyStatic, {
      root: distPath,
      prefix: '/assets/',
    })
  } else {
    const viteServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    await app.use(viteServer.middlewares)
  }

  app.get('/weeks', getWeeksHandler)
  app.get<{ Querystring: { weekNumber: number } }>('/games', getGamesHandler)
  app.get('/teams', getTeamsHandler)
  app.post<{ Body: IUser }>('/register', registerHandler)
  app.post(
    '/login',
    { preHandler: app.auth([app.asyncVerifyUserAndPassword]) },
    loginHandler
  )

  app.get('*', async (req, reply) => {
    const pageContextInit = {
      urlOriginal: req.url,
      isLoggedUser: req.cookies.loggedUser,
    }

    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (pageContext.redirectTo) {
      reply.redirect(307, pageContext.redirectTo)
    } else if (!httpResponse) {
      return reply.code(404).type('text/html').send('Not Found')
    }

    const { body, statusCode, contentType } = httpResponse

    return reply.status(statusCode).type(contentType).send(body)
  })

  const port: number = process.env.PORT ? +process.env.PORT : 3000

  app.listen({ port })

  console.log(`Server running at http://localhost:${port}`)
}
