import { Types } from 'mongoose'
import { IWeek, Week } from '../models/weekModel'

export const findAllWeeksAndSortByWeekNumber = async (): Promise<IWeek[]> => {
  try {
    return await Week.find().sort('weekNumber').lean()
  } catch (error) {
    console.log(
      `Une erreur est survenue lors de la récupération des journnées de championnat : ${error}`
    )
    throw new Error('An error occured when trying to get weeks')
  }
}

export const createWeek = async (week: IWeek): Promise<IWeek> => {
  try {
    const weekToSave = new Week({
      date: week.date,
      weekNumber: week.weekNumber
    })
    const savedWeek = await weekToSave.save()
    console.log(`Sauvegarde de la journée ${week.weekNumber}`)
    return savedWeek
  } catch (error: any) {
    if (error.code === 11000) {
      console.log(`La journée ${week.weekNumber} existe déjà`)
      throw new Error(`La journée ${week.weekNumber} existe déjà`)
    } else {
      console.log(
        `Une erreur est survenue lors de la création de la journée ${week.weekNumber}`
      )
    }
  }
  throw new Error("Une erreur est survenue lors de la création de l'équipe")
}

export const getWeek = async (
  id: Types.ObjectId
): Promise<IWeek | undefined | null> => {
  try {
    return await Week.findById(id).lean()
  } catch (error: any) {
    console.log(
      `Une erreur est survenue lors de la récupération de la journée ${id}`
    )
    throw new Error(
      `Une erreur est survenue lors de la récupération de la journée ${id}`
    )
  }
}
