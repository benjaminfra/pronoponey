import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 17

export const initWeek17 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['SCO']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-01-01T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-01-01T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-01-01T17:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-01-01T19:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-01-01T21:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-01-01T21:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-01-02T17:00:00.000')),
    weekNumber,
    2,
    3
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-01-02T19:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-01-02T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-01-02T21:00:00.000')),
    weekNumber,
    2,
    1
  )
}
