import { Schema, Types, model } from 'mongoose'

interface Token {
  token: string
}

export interface IUser {
  _id?: Types.ObjectId
  email: string
  password: string
  username?: string
  tokens?: Token[]
}

export interface ILoggedUser {
  id: Types.ObjectId
  username: string
  tokens: Token[]
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

export const User = model<IUser>('users', UserSchema)
