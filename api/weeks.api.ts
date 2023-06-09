/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IWeek } from '../server/db/models/weekModel'

class WeeksService {
  findAll(): Promise<IWeek[]> {
    return axios
      .get('http://localhost:3000/weeks')
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  createTeam(weekNumber : number, date: Date): Promise<IWeek> {
    return axios
      .post('http://localhost:3000/weeks', {
        weekNumber, date
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default WeeksService
