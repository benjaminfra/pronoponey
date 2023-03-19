import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 10

export const initWeek10 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OL']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-10-07T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-10-08T17:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-10-08T21:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-10-09T13:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-10-09T15:00:00.000')),
    weekNumber,
    2,
    3
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-10-09T15:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-10-09T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-10-09T15:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-10-09T17:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-10-09T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
