import { FastifyRequest, FastifyReply } from 'fastify'
import { IUser } from '../db/models/userModel'
import { createUser } from '../db/services/userService'

export function getPostUserHandler(
  req: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply
) {
  createUser(req.body)
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
