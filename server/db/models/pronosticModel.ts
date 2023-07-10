import { Schema, Types, model } from 'mongoose'

export type IPronostic = {
  _id: Types.ObjectId
  userId: Types.ObjectId
  gameId: Types.ObjectId
  weekNumber: number
  homeScore: number
  awayScore: number
  points?: number
}

const PronosticSchema = new Schema<IPronostic>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    gameId: { type: Schema.Types.ObjectId, ref: 'games', required: true },
    weekNumber: { type: Number, required: true },
    homeScore: { type: Number, required: true },
    awayScore: { type: Number, required: true },
    points: { type: Number }
  },
  { timestamps: true }
)

PronosticSchema.index({ userId: 1, gameId: 1 }, { unique: true })

export const Pronostic = model<IPronostic>('pronostics', PronosticSchema)
