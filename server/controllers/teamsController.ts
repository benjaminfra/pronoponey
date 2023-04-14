import { FastifyReply, FastifyRequest } from 'fastify'
import { ITeam } from '../db/models/teamModel'
import { Roles } from '../db/models/userModel'
import { findAllTeams, createTeam } from '../db/services/teamService'

export function getTeamsHandler(_req: any, reply: FastifyReply) {
  findAllTeams()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

export const postTeams = (
  req: FastifyRequest<{ Body: ITeam }>,
  reply: FastifyReply
) => {
  if (req.user.role !== Roles.Admin) {
    reply.status(403).send('Forbidden')
    return
  }
  createTeam(req.body)
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
