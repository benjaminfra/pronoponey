import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 2

export const initWeek2 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['FCN']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-08-12T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-08-13T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-08-13T21:00:00.000')),
    weekNumber,
    5,
    2
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-08-14T13:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-08-14T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-08-14T15:00:00.000')),
    weekNumber,
    2,
    4
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-08-14T15:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-08-14T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-08-14T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-09-07T19:00:00.000')),
    weekNumber,
    3,
    1
  )
}
