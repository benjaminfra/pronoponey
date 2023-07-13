/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IGame, NewGame } from '../server/db/models/gameModel'

class GamesService {
  getGamesByWeekNumber(weekNumber: number): Promise<IGame[]> {
    return axios
      .get(`http://localhost:3000/games?weekNumber=${weekNumber}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  createGame(game: NewGame): Promise<IGame> {
    return axios
      .post('http://localhost:3000/games', game)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default GamesService
