import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 6

export const initWeek6 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['AJA']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-09-03T17:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-09-03T19:00:00.000')),
    weekNumber,
    5,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-09-03T21:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-09-04T13:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-09-04T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-09-04T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-09-04T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-09-04T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-09-04T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-09-04T21:00:00.000')),
    weekNumber,
    0,
    1
  )
}
