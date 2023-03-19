import { Types } from 'mongoose'
import { saveGame } from '../../services/gameService'

const weekNumber = 1

export const initWeek1 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OL']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-08-05T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-08-06T21:00:00.000')),
    weekNumber,
    0,
    5
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-08-06T17:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-08-07T13:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-08-07T15:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-08-07T15:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-08-07T15:00:00.000')),
    weekNumber,
    4,
    1
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-08-07T15:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-08-07T17:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-08-07T21:00:00.000')),
    weekNumber,
    4,
    1
  )
}
