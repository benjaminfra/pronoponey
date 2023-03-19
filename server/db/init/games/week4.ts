import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 4

export const initWeek4 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['ACA']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-08-26T21:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-08-27T17:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-08-27T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-08-28T13:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-08-28T15:00:00.000')),
    weekNumber,
    0,
    7
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-08-28T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-08-28T15:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-08-28T15:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-08-28T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-08-28T21:00:00.000')),
    weekNumber,
    1,
    1
  )
}
