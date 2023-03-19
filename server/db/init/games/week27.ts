import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 27

export const initWeek27 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['LOSC']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-03-10T21:00:00.000')),
    weekNumber,
    3,
    3
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-03-11T19:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-03-11T21:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-03-12T13:00:00.000')),
    weekNumber,
    0,
    4
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-03-12T15:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-03-12T15:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-03-12T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-03-12T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-03-12T17:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-03-12T21:00:00.000')),
    weekNumber,
    2,
    2
  )
}
