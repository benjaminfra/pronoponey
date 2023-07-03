/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { IUser } from '../server/db/models/userModel'

class AuthService {
  signUp(user: IUser): Promise<void> {
    return axios
      .post('http://localhost:3000/register', user)
      .then(() => {})
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  login(user: IUser): Promise<void> {
    return axios
      .post('http://localhost:3000/login', user)
      .then(async () => {})
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  logout(): Promise<void> {
    return axios
      .post('http://localhost:3000/logout')
      .then(async () => {})
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default AuthService
