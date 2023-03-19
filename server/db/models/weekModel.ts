import { Schema, Types, model } from 'mongoose'

export interface IWeek {
  _id: Types.ObjectId
  weekNumber: number
  date: Date
}

const WeekSchema = new Schema<IWeek>({
  date: { type: Date, required: true },
  weekNumber: { type: Number, required: true, unique: true },
})

export const Week = model<IWeek>('weeks', WeekSchema)
