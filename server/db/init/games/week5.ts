import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 5

export const initWeek5 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['SCO']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-08-31T19:00:00.000')),
    weekNumber,
    2,
    4
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-08-31T19:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-08-31T19:00:00.000')),
    weekNumber,
    2,
    4
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-08-31T19:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-08-31T19:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-08-31T21:00:00.000')),
    weekNumber,
    5,
    2
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-08-31T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-08-31T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-08-31T21:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-08-31T21:00:00.000')),
    weekNumber,
    0,
    3
  )
}
