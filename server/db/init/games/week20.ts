import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 20

export const initWeek20 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['FCL']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-01-27T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-01-28T19:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-01-28T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-01-29T13:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-01-29T15:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2023-01-29T15:00:00.000')),
    weekNumber,
    4,
    0
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2023-01-29T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-01-29T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-01-29T17:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-01-29T21:00:00.000')),
    weekNumber,
    1,
    1
  )
}
