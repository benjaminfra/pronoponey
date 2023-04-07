import { Document } from 'mongoose'
import { IPronostic, Pronostic } from '../models/pronosticModel'

export const savePronostic = async (pronostic: IPronostic & Document) => {
  try {
    const savedProno = await Pronostic.findOneAndUpdate(
      { gameId: pronostic.gameId, userId: pronostic.userId },
      { homeScore: pronostic.homeScore, awayScore: pronostic.awayScore },
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
