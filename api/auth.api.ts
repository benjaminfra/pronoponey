import { ILoggedUser, IUser } from '../server/db/models/userModel'

export const signUp = (user: IUser): Promise<ILoggedUser> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  return fetch(`http://localhost:3000/register`, requestOptions)
    .then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<ILoggedUser>
      } else {
        const error = await response.json()
        throw error.message
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export const login = (user: IUser): Promise<ILoggedUser> => {
  const params = new URLSearchParams()
  params.append('email', user.email)
  params.append('password', user.password)
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }
  return fetch(`http://localhost:3000/login`, requestOptions)
    .then(async (response) => {
      if (response.ok) {
        return response.json() as Promise<ILoggedUser>
      } else {
        const error = await response.json()
        throw error.message
      }
    })
    .catch((error) => {
      throw new Error(error)
    })
}
