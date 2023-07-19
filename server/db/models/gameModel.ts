import { Schema, Types, model } from 'mongoose'
import { ITeam } from './teamModel'

export type IGame = {
  _id: Types.ObjectId
  date: Date
  homeTeam: Types.ObjectId | ITeam
  awayTeam: Types.ObjectId | ITeam
  homeScore?: number
  awayScore?: number
  weekNumber: number
}

export type NewGame = Omit<IGame, '_id'> & {
  _id?: Types.ObjectId
}

export type UpdateGame = Omit<IGame, '_id'> & {
  date?: Date
  homeTeam?: Types.ObjectId | ITeam
  awayTeam?: Types.ObjectId | ITeam
  homeScore?: number
  awayScore?: number
  weekNumber?: number
}

const GameSchema = new Schema<IGame>({
  date: { type: Date, required: true },
  homeTeam: { type: Schema.Types.ObjectId, ref: 'Teams', required: true },
  awayTeam: { type: Schema.Types.ObjectId, ref: 'Teams', required: true },
  weekNumber: { type: Number, required: true },
  homeScore: { type: Number },
  awayScore: { type: Number }
})

GameSchema.index({ homeTeam: 1, awayTeam: 1, weekNumber: 1 }, { unique: true })

export const Game = model<IGame>('games', GameSchema)
