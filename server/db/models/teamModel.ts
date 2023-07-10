import { Schema, model, Types } from 'mongoose'

export type ITeam = {
  _id: Types.ObjectId
  name: string
  shortname: string
  logoURI: string
}

const TeamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  shortname: { type: String, required: true },
  logoURI: { type: String, required: true }
})

export const Team = model<ITeam>('teams', TeamSchema)
