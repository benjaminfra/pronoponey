import { IPronostic } from '../server/db/models/pronosticModel'
import axios from 'axios'

class PronosticService {
  savePronostic = (pronostic: IPronostic) => {
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
