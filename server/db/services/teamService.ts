import { Types } from 'mongoose'
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

export const createTeam = async (
  name: string,
  shortname: string,
  logoURI: string
): Promise<ITeam> => {
  try {
    const teamToSave = new Team({ name, shortname, logoURI })
    await teamToSave.save()
    console.log(`Sauvegarde de l'équipe ${name}`)
    return teamToSave
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la création de l'équipe ${name}, ${shortname}, ${logoURI}`
    )
  }
  throw new Error("Une erreur est survenue lors de la création de l'équipe")
}

export const deleteTeam = async (id: string): Promise<ITeam | null> => {
  try {
    return Team.findOneAndDelete({ _id: new Types.ObjectId(id) })
  } catch (error) {
    console.error(
      `Une erreur est survenue lors de la suppression de l'équipe ${id} : ${error}`
    )
    throw new Error(
      "Une erreur est survenue lors de la suppression de l'équipe"
    )
  }
}
