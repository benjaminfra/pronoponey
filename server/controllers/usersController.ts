import { FastifyRequest, FastifyReply } from 'fastify'
import { IUser } from '../db/models/userModel'
import {
  createUser,
  findByToken,
  generateToken,
  login,
} from '../db/services/userService'

export function registerHandler(
  req: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) {
  createUser(req.body)
    .then((data) => {
      reply.setCookie('loggedUser', 'true').status(200).send(data)
    })
    .catch((error) => {
      reply.status(400).type('text/html').send(error)
    })
}

export function loginHandler(req: FastifyRequest, reply: FastifyReply) {
  generateToken(req.user)
    .then(() => {
      reply.setCookie('loggedUser', 'true').status(200).send(req.user)
    })
    .catch((error) => {
      reply.status(400).type('text/html').send(error)
    })
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
