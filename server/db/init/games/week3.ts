import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 3

export const initWeek3 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OL']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-08-19T21:00:00.000')),
    weekNumber,
    4,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-08-20T17:00:00.000')),
    weekNumber,
    1,
    4
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-08-20T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-08-21T13:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-08-21T15:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-08-21T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-08-21T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-08-21T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-08-21T17:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-08-21T21:00:00.000')),
    weekNumber,
    7,
    1
  )
}
