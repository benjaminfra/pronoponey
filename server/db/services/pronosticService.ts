import { Document, Types } from 'mongoose'
import { IPronostic, Pronostic } from '../models/pronosticModel'

export const savePronostic = async (pronostic: IPronostic & Document) => {
  try {
    const savedProno = await Pronostic.findOneAndUpdate(
      { gameId: pronostic.gameId, userId: pronostic.userId },
      {
        homeScore: pronostic.homeScore,
        awayScore: pronostic.awayScore,
        weekNumber: pronostic.weekNumber,
      },
      { new: true, upsert: true }
    )
    console.log(
      `Pronostic pour le match ${savedProno.gameId} enregistré pour l'utilisateur ${savedProno.userId}`
    )
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la sauvegarde du pronostic ${error}`
    )
  }
}

export const findPronosticByWeekNumber = async (
  weekNumber: number,
  userId: Types.ObjectId
) => {
  console.log(
    `Recherche des pronostics pour l'utilisateur ${userId} et la journée ${weekNumber}`
  )
  try {
    return Pronostic.find({ weekNumber, userId }).lean()
  } catch (error) {
    throw new Error('An error occured when trying to get pronostics')
  }
}
