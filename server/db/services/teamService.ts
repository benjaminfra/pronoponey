import { ITeam, Team } from '../models/teamModel'

export const findAllTeams = async (): Promise<ITeam[]> => {
  try {
    return Team.find().lean()
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la récupération des équipe : ${error}`
    )
    throw new Error('An error occured when trying to get teams')
  }
}
