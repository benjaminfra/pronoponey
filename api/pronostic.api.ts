/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IPronostic, NewPronostic } from '../server/db/models/pronosticModel'

class PronosticService {
  savePronostic(pronostic: NewPronostic): Promise<IPronostic> {
    return axios
      .post('http://localhost:3000/pronostic', pronostic)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  findPronosticsByWeekNumber(weekNumber: number): Promise<IPronostic[]> {
    return axios
      .get(`http://localhost:3000/pronostic?weekNumber=${weekNumber}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default PronosticService
