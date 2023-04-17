import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import fastifyAuth from '@fastify/auth'
import fastifyCookie from '@fastify/cookie'
import fastifyMultipart from '@fastify/multipart'
import fastify from 'fastify'
import path from 'path'
import vite from 'vite'
import mongoose, { Types } from 'mongoose'
import { getWeeksHandler } from './controllers/weeksController'
import { getGamesHandler } from './controllers/gamesController'
import {
  deleteTeams,
  getTeamsHandler,
  postTeams,
} from './controllers/teamsController'
import {
  asyncVerifyJWTandLevel,
  asyncVerifyUserAndPassword,
  asyncVerifyAdminJWT,
  registerHandler,
  loginHandler,
  logoutHandler,
} from './controllers/usersController'
import { routeHandler } from './controllers/routeController'
import { IUser } from './db/models/userModel'
import {
  getPronosticsByWeekNumberHandler,
  postPronosticsHandler,
} from './controllers/pronosticsController'
import { PronosticProps } from '../pages/play/types'

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

  app.get('/weeks', getWeeksHandler)
  app.get<{ Querystring: { weekNumber: number } }>('/games', getGamesHandler)
  app.get('/teams', getTeamsHandler)
  app.post<{ Body: IUser }>('/register', registerHandler)
  app.post(
    '/login',
    {
      preHandler: app.auth([app.asyncVerifyUserAndPassword]),
    },
    loginHandler
  )
  app.post(
    '/logout',
    {
      preHandler: app.auth([app.asyncVerifyJWTandLevel]),
    },
    logoutHandler
  )
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
  app.post(
    '/teams',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    postTeams
  )

  app.delete<{ Params: { id: string } }>(
    '/teams/:id',
    { preHandler: app.auth([app.asyncVerifyAdminJWT]) },
    deleteTeams
  )

  app.get('*', routeHandler)

  const port: number = process.env.PORT ? +process.env.PORT : 3000

  app.listen({ port })

  console.log(`Server running at http://localhost:${port}`)
}
