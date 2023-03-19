import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 25

export const initWeek25 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['LOSC']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-02-24T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-02-25T19:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-02-25T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-02-26T13:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-02-26T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-02-26T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-02-26T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-02-26T15:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-02-26T17:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-02-26T21:00:00.000')),
    weekNumber,
    0,
    3
  )
}
