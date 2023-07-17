import { Schema, Types, model } from 'mongoose'
import { Game } from './gameModel'

export type IWeek = {
  _id: Types.ObjectId
  weekNumber: number
  date: Date
}

export type UpdateWeek = Omit<IWeek, '_id'>

const WeekSchema = new Schema<IWeek>({
  date: { type: Date, required: true },
  weekNumber: { type: Number, required: true, unique: true }
})

WeekSchema.pre<IWeek>('findOneAndDelete', async function deleteGames() {
  const weekId = this._id
  try {
    await Game.deleteMany({ week: weekId }).exec()
  } catch (error) {
    console.log(
      `Impossible de supprimer les matchs liés à la journée ${weekId}`
    )
  }
})

export const Week = model<IWeek>('weeks', WeekSchema)
