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
