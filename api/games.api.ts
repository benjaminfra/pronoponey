/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IGame, NewGame, UpdateGame } from '../server/db/models/gameModel'

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

  deleteGame(gameId: string): Promise<void> {
    return axios
      .delete(`http://localhost:3000/games/${gameId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  updateGame(gameId: string, game: UpdateGame): Promise<IGame> {
    console.log('gameId', gameId)
    console.log('game', game)
    return axios
      .put(`http://localhost:3000/games/${gameId}`, game)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default GamesService
