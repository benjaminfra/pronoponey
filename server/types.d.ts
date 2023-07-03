import { Document } from 'mongoose'
import { IUser } from './db/models/userModel'

declare module 'fastify' {
  export type FastifyRequest = {
    user: IUser & Document
    token: string
  }
  export type FastifyInstance = {
    asyncVerifyUserAndPassword: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<IUser>
    asyncVerifyJWTandLevel: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
    asyncVerifyAdminJWT: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}
