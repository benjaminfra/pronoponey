import { Schema, Types, model } from 'mongoose'

export interface IUser {
  _id?: Types.ObjectId
  email: string
  password: string
  username?: string
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
)

export const User = model<IUser>('users', UserSchema)
