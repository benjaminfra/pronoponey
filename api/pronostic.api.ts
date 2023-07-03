/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IPronostic } from '../server/db/models/pronosticModel'
import { PronosticProps } from '../pages/play/types'

class PronosticService {
  savePronostic(pronostic: PronosticProps): Promise<void> {
    return axios
      .post('http://localhost:3000/pronostic', pronostic)
      .then(() => {})
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
