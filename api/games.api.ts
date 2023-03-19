import { IGame } from '../server/db/models/gameModel'

export const getGamesByWeekNumber = (weekNumber: number): Promise<IGame[]> => {
  return fetch(`http://localhost:3000/games?weekNumber=${weekNumber}`)
    .then((response) => {
      return response.json() as Promise<IGame[]>
    })
    .catch((error) => {
      throw new Error(error)
    })
}
