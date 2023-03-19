import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 16

export const initWeek16 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['ACA']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-12-28T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-12-28T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-12-28T17:00:00.000')),
    weekNumber,
    2,
    3
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-12-28T19:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-12-28T21:00:00.000')),
    weekNumber,
    2,
    4
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-12-28T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-12-29T17:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-12-29T19:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-12-29T21:00:00.000')),
    weekNumber,
    6,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-12-29T21:00:00.000')),
    weekNumber,
    0,
    0
  )
}
