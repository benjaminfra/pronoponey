import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 13

export const initWeek13 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['RCL']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-10-28T21:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-10-29T17:00:00.000')),
    weekNumber,
    4,
    3
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-10-29T21:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-10-30T13:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-10-30T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-10-30T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-10-30T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-10-30T15:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-10-30T17:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-10-30T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
