import { Game, IGame, NewGame } from '../models/gameModel'

export const saveGame = async (newGame: NewGame): Promise<IGame> => {
  const game = new Game({
    awayTeam: newGame.awayTeam,
    homeTeam: newGame.homeTeam,
    date: newGame.date,
    weekNumber: newGame.weekNumber
  })

  try {
    await game.save()
    console.log(
      `J-${newGame.weekNumber} : Match créé entre ${newGame.homeTeam}-${newGame.awayTeam}`
    )
    return game
  } catch (error: any) {
    if (error.code === 11000) {
      console.log(
        `J-${newGame.weekNumber} : Match déjà existant entre ${newGame.homeTeam}-${newGame.awayTeam}`
      )
      throw new Error('Match déjà existant')
    }
    throw new Error('Une erreur est survenue lors de la création du match')
  }
}

export const findGamesByWeeknumber = async (weekNumber: number) => {
  try {
    return await Game.find({ weekNumber }).sort('date').lean()
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la récupération des matchs de la journée ${weekNumber} : ${error}`
    )
    throw new Error('An error occured when trying to get games')
  }
}

export const updateGamesWeekNumber = async (
  weekNumber: number,
  newWeekNumber: number
) => {
  try {
    return await Game.updateMany({ weekNumber }, { weekNumber: newWeekNumber })
  } catch (error) {
    throw new Error('Une erreur est survenue lors de la mise à jour des matchs')
  }
}
