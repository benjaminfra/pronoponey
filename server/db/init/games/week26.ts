import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 26

export const initWeek26 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OGCN']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-03-03T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-03-04T19:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-03-04T21:00:00.000')),
    weekNumber,
    4,
    2
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-03-05T13:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-03-05T15:00:00.000')),
    weekNumber,
    5,
    0
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-03-05T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-03-05T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-03-05T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-03-05T17:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-03-05T21:00:00.000')),
    weekNumber,
    0,
    1
  )
}
