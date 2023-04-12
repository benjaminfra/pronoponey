import { Schema, Types, model, models } from 'mongoose'

export interface Token {
  token: string
}

export enum Roles {
  Admin = '2',
  User = '1',
}

export interface IUser {
  _id?: Types.ObjectId
  password: string
  role?: Roles
  username: string
  tokens?: Token[]
}

export interface ILoggedUser {
  id: Types.ObjectId
  username: string
  role: Roles
  tokens: Token[]
}

const UserSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Roles,
      default: Roles.User,
      required: true,
    },
    username: { type: String, required: true, unique: true },
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

export const User =
  models && models['users']
    ? model<IUser>('users')
    : model<IUser>('users', UserSchema)
