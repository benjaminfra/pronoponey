import { Document, Types } from 'mongoose'
import { IPronostic, Pronostic } from '../models/pronosticModel'

export const savePronostic = async (
  pronostic: IPronostic & Document
): Promise<IPronostic> => {
  try {
    await pronostic.save()
    console.log(
      `Pronostic pour le match ${pronostic.gameId} enregistré pour l'utilisateur ${pronostic.userId}`
    )
    return pronostic
  } catch (error) {
    throw Error('Une erreur est survenue lors de la sauvegarde du pronostic')
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
