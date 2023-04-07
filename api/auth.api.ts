import { IUser } from '../server/db/models/userModel'
import axios from 'axios'

class AuthService {
  signUp = (user: IUser): Promise<void> => {
    return axios
      .post(`http://localhost:3000/register`, user)
      .then(() => {
        return
      })
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  login = (user: IUser): Promise<void> => {
    return axios
      .post(`http://localhost:3000/login`, user)
      .then(async () => {
        return
      })
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  logout = (): Promise<void> => {
    return axios
      .post(`http://localhost:3000/logout`)
      .then(async () => {
        return
      })
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default AuthService
