import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 8

export const initWeek8 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['AJA']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-09-16T21:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-09-16T17:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-09-16T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-09-18T13:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-09-18T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-09-18T15:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-09-18T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-09-18T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-09-18T17:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-09-18T21:00:00.000')),
    weekNumber,
    0,
    1
  )
}
