import { FastifyReply } from 'fastify'
import { findAllWeeksAndSortByWeekNumber } from '../db/services/weekService'

export function getWeeksHandler(_req: any, reply: FastifyReply) {
  findAllWeeksAndSortByWeekNumber()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}
