import { Document } from 'mongoose'
import { IUser } from './db/models/userModel'

declare module 'fastify' {
  export interface FastifyRequest {
    user: IUser & Document
  }
  export interface FastifyInstance {
    asyncVerifyUserAndPassword: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<IUser>
    asyncVerifyJWTandLevel: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>
  }
}
