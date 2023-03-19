import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 19

export const initWeek19 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['RCL']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-01-14T17:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-01-14T19:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-01-14T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-01-15T13:00:00.000')),
    weekNumber,
    5,
    1
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-01-15T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-01-15T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-01-15T15:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-01-15T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-01-15T17:00:00.000')),
    weekNumber,
    7,
    1
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-01-15T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
