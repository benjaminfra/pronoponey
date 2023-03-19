import { IUser } from '../server/db/models/userModel'

export const signUp = (user: IUser): Promise<IUser> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  return fetch(`http://localhost:3000/user`, requestOptions)
    .then((response) => {
      return response.json() as Promise<IUser>
    })
    .catch((error) => {
      throw new Error(error)
    })
}
