import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 24

export const initWeek24 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['AJA']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-02-17T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-02-18T19:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-02-18T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-02-12T13:00:00.000')),
    weekNumber,
    4,
    3
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-02-12T17:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-02-12T21:00:00.000')),
    weekNumber,
    2,
    3
  )
}
