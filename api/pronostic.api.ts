import { IPronostic } from '../server/db/models/pronosticModel'
import axios from 'axios'
import { PronosticProps } from '../pages/play/types'

class PronosticService {
  savePronostic = (pronostic: PronosticProps) => {
    return axios
      .post(`http://localhost:3000/pronostic`, pronostic)
      .then(() => {
        return
      })
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default PronosticService
