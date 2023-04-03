import { ILoggedUser, IUser } from '../server/db/models/userModel'
import { getAuthorizationHeader } from './helpers'

export const signUp = (user: IUser): Promise<void> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  return fetch(`http://localhost:3000/register`, requestOptions)
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json()
        throw error.message
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export const login = (user: IUser): Promise<void> => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }
  return fetch(`http://localhost:3000/login`, requestOptions)
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json()
        throw error.message
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export const logout = (user: ILoggedUser): Promise<void> => {
  const requestOptions = {
    method: 'POST',
    headers: getAuthorizationHeader(user.tokens),
  }
  return fetch(`http://localhost:3000/logout`, requestOptions)
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json()
        throw error.message
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}
