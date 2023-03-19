import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 7

export const initWeek7 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['RCL']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-09-09T21:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-09-10T17:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-09-10T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-09-11T13:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-09-11T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-09-11T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-09-11T15:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-09-11T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-09-11T17:00:00.000')),
    weekNumber,
    5,
    0
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-09-11T21:00:00.000')),
    weekNumber,
    2,
    1
  )
}
