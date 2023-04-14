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

export const createTeam = async (team: ITeam): Promise<ITeam> => {
  try {
    const teamToSave = new Team(team)
    await teamToSave.save()
    return teamToSave
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la création de l'équipe ${team.name}, ${team.shortname}, ${team.logoURI}`
    )
  }
  throw new Error("Une erreur est survenue lors de la création de l'équipe")
}
