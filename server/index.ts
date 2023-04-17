import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import fastifyAuth from '@fastify/auth'
import fastifyCookie from '@fastify/cookie'
import fastifyMultipart from '@fastify/multipart'
import fastify from 'fastify'
import path from 'path'
import vite from 'vite'
import mongoose from 'mongoose'
import { registerWeeksController } from './controllers/weeksController'
import { registerGamesController } from './controllers/gamesController'
import { registerTeamController } from './controllers/teamsController'
import {
  asyncVerifyJWTandLevel,
  asyncVerifyUserAndPassword,
  asyncVerifyAdminJWT,
  registerUserController,
} from './controllers/usersController'
import { routeHandler } from './controllers/routeController'
import { registerPronosticController } from './controllers/pronosticsController'

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

async function startServer() {
  const app = fastify()

  await app.register(middie)
  await app.register(compress)
  await app.register(fastifyMultipart)
  await app
    .decorate('asyncVerifyJWTandLevel', asyncVerifyJWTandLevel)
    .decorate('asyncVerifyUserAndPassword', asyncVerifyUserAndPassword)
    .decorate('asyncVerifyAdminJWT', asyncVerifyAdminJWT)
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
    app.register(fastifyStatic, {
      root: path.join(__dirname, 'public'),
      prefix: '/assets/',
    })
    await app.use(viteServer.middlewares)
  }

  registerTeamController(app)
  registerUserController(app)
  registerGamesController(app)
  registerPronosticController(app)
  registerWeeksController(app)

  app.get('*', routeHandler)

  const port: number = process.env.PORT ? +process.env.PORT : 3000

  app.listen({ port })

  console.log(`Server running at http://localhost:${port}`)
}
