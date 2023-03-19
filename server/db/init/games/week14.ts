import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 14

export const initWeek14 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['ESTAC']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-11-04T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-11-05T17:00:00.000')),
    weekNumber,
    4,
    2
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-11-05T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-11-06T13:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-11-06T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-11-06T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-11-06T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-11-06T15:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-11-06T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-11-06T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
