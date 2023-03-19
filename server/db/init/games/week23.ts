import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 23

export const initWeek23 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OGCN']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-02-10T21:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-02-11T19:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-02-11T21:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-02-12T13:00:00.000')),
    weekNumber,
    3,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    2,
    0
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    3,
    0
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-02-12T15:00:00.000')),
    weekNumber,
    4,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-02-12T17:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-02-12T21:00:00.000')),
    weekNumber,
    2,
    1
  )
}
