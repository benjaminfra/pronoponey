import { FastifyRequest, FastifyReply } from 'fastify'
import { ILoggedUser, IUser } from '../db/models/userModel'
import {
  createUser,
  findByToken,
  generateToken,
  login,
  logout,
} from '../db/services/userService'
import { ensure } from '../../helpers/types.helpers'

export async function registerHandler(
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

export async function loginHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const token = await generateToken(req.user)
    const loggedUser: ILoggedUser = {
      id: req.user.id,
      tokens: [{ token }],
      username: ensure(req.user.username),
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
      throw new Error('No token was sent')
    }
    const token = request.headers.authorization.replace('Bearer ', '')
    const user = await findByToken(token)
    if (!user) {
      throw new Error('Authentication failed!')
    }
    request.user = user
    request.token = token
  } catch (error) {
    reply.code(401).send(error)
  }
}

export async function asyncVerifyUserAndPassword(
  request: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) {
  try {
    if (!request.body) {
      throw new Error('Email et mot de passe requis')
    }
    const user = await login(request.body)
    request.user = user
  } catch (error) {
    reply.code(400).send(error)
  }
}

export async function logoutHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await logout(request.user, request.token)
    reply.clearCookie('loggedUser').status(204).send()
  } catch (error) {
    reply.code(500).send()
  }
}
