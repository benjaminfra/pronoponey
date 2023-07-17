/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IWeek, UpdateWeek } from '../server/db/models/weekModel'

class WeeksService {
  findAll(): Promise<IWeek[]> {
    return axios
      .get('http://localhost:3000/weeks')
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  createWeek(weekNumber: number, date: Date): Promise<IWeek> {
    return axios
      .post('http://localhost:3000/weeks', {
        weekNumber,
        date
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  deleteWeek(id: string): Promise<void> {
    return axios
      .delete(`http://localhost:3000/weeks/${id}`)
      .then(() => undefined)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  updateWeek(id: string, week: UpdateWeek): Promise<IWeek> {
    return axios
      .put(`http://localhost:3000/weeks/${id}`, week)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default WeeksService
