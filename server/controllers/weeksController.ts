import { FastifyInstance, FastifyReply } from 'fastify'
import { findAllWeeksAndSortByWeekNumber } from '../db/services/weekService'

function getWeeksHandler(_req: any, reply: FastifyReply) {
  findAllWeeksAndSortByWeekNumber()
    .then((data) => {
      reply.status(200).send(data)
    })
    .catch((error) => {
      reply.status(500).type('text/html').send(error)
    })
}

const registerWeeksController = (app: FastifyInstance) => {
  app.get('/weeks', getWeeksHandler)
}

export default registerWeeksController
