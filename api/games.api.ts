import { IGame } from '../server/db/models/gameModel'
import axios from 'axios'

class GamesService {
  getGamesByWeekNumber = (weekNumber: number): Promise<IGame[]> => {
    return axios
      .get(`http://localhost:3000/games?weekNumber=${weekNumber}`)
      .then((response) => {
        return response.data as Promise<IGame[]>
      })
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default GamesService
