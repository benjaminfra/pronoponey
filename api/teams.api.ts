/* eslint-disable class-methods-use-this */
import axios from 'axios'
import { Types } from 'mongoose'
import { ITeam } from '../server/db/models/teamModel'

class TeamsService {
  createTeam(form: FormData): Promise<ITeam> {
    return axios
      .post('http://localhost:3000/teams', form)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  findAll(): Promise<ITeam[]> {
    return axios
      .get('http://localhost:3000/teams')
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  deleteTeam(id: Types.ObjectId): Promise<void> {
    return axios
      .delete(`http://localhost:3000/teams/${id.toString()}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }

  modifyTeam(form: FormData): Promise<void> {
    return axios
      .put('http://localhost:3000/teams', form)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.response.data.message)
      })
  }
}

export default TeamsService
