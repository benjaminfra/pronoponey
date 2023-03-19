import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 11

export const initWeek11 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['RCSA']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-10-14T21:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-10-15T17:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-10-15T21:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-10-16T13:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-10-16T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-10-16T15:00:00.000')),
    weekNumber,
    4,
    1
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-10-16T15:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-10-16T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-10-16T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-10-16T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
