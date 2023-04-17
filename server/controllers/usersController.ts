import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { ILoggedUser, IUser, Roles } from '../db/models/userModel'
import {
  createUser,
  findByToken,
  generateToken,
  login,
  logout,
} from '../db/services/userService'
import { ensure } from '../../helpers/types.helpers'

async function registerHandler(
  req: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) {
  try {
    const createdUser = await createUser(req.body)
    await reply
      .setCookie('loggedUser', JSON.stringify(createdUser))
      .status(204)
      .send()
  } catch (error) {
    reply.status(400).type('text/html').send(error)
  }
}

async function loginHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const token = await generateToken(req.user)
    const loggedUser: ILoggedUser = {
      id: req.user.id,
      tokens: [{ token }],
      username: req.user.username,
      role: ensure(req.user.role),
    }
    await reply
      .setCookie('loggedUser', JSON.stringify(loggedUser))
      .status(204)
      .send()
  } catch (error) {
    reply.status(400).type('text/html').send(error)
  }
}

export async function asyncVerifyJWTandLevel(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    if (!request.headers.authorization) {
      reply.status(403).send('Forbidden')
      throw new Error('No token was sent')
    }
    const token = request.headers.authorization.replace('Bearer ', '')
    const user = await findByToken(token)
    if (!user) {
      reply.status(403).send('Forbidden')
      throw new Error('Authentication failed!')
    }
    request.user = user
    request.token = token
  } catch (error) {
    reply.code(401).send(error)
  }
}

export async function asyncVerifyAdminJWT(
  request: FastifyRequest,
  reply: FastifyReply
) {
  await asyncVerifyJWTandLevel(request, reply)
  if (request.user.role !== Roles.Admin) {
    reply.status(403).send('Forbidden')
    throw new Error('Forbidden')
  }
}

export async function asyncVerifyUserAndPassword(
  request: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) {
  try {
    if (!request.body) {
      throw new Error("Nom d'utilisateur et mot de passe requis")
    }
    const user = await login(request.body)
    request.user = user
  } catch (error) {
    reply.code(400).send(error)
  }
}

async function logoutHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    await logout(request.user, request.token)
    reply.clearCookie('loggedUser').status(204).send()
  } catch (error) {
    reply.code(500).send()
  }
}

export const registerUserController = (app: FastifyInstance): void => {
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
  app.post<{ Body: IUser }>('/register', registerHandler)
}
