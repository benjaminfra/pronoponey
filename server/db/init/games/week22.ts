import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 22

export const initWeek22 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['PSG']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-02-04T17:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-02-04T19:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-02-04T21:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-02-05T13:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-02-05T15:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-02-05T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-02-05T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-02-05T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-02-05T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-02-05T21:00:00.000')),
    weekNumber,
    1,
    3
  )
}
