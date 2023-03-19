import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 28

export const initWeek28 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OL']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-03-17T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-03-18T19:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-03-18T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-03-19T13:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-03-19T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-03-19T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-03-19T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-03-19T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-03-19T17:05:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-03-19T20:45:00.000')),
    weekNumber
  )
}
