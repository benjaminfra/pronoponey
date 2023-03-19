import { Types } from 'mongoose'
import { Game } from '../models/gameModel'

export const saveGame = (
  homeTeam: Types.ObjectId,
  awayTeam: Types.ObjectId,
  date: Date,
  weekNumber: number,
  homeScore?: number,
  awayScore?: number
) => {
  const game = new Game({
    awayScore: awayScore,
    homeScore: homeScore,
    awayTeam: awayTeam,
    homeTeam: homeTeam,
    date: date,
    weekNumber: weekNumber,
  })

  game
    .save()
    .then(() => {
      console.log(`J-${weekNumber} : Match créé entre ${homeTeam}-${awayTeam}`)
    })
    .catch((error) => {
      if (error.code === 11000) {
        console.log(
          `J-${weekNumber} : Match déjà existant entre ${homeTeam}-${awayTeam}`
        )
      }
    })
}

export const findGamesByWeeknumber = async (weekNumber: number) => {
  try {
    return Game.find({ weekNumber }).sort('date').lean()
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la récupération des matchs de la journée ${weekNumber} : ${error}`
    )
    throw new Error('An error occured when trying to get games')
  }
}
