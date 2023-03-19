import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 18

export const initWeek18 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['ACA']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-01-11T19:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-01-11T19:00:00.000')),
    weekNumber,
    0,
    5
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-01-11T19:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-01-11T19:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-01-11T19:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-01-11T21:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-01-11T21:00:00.000')),
    weekNumber,
    6,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-01-11T21:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-01-11T21:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-01-11T21:00:00.000')),
    weekNumber,
    0,
    2
  )
}
