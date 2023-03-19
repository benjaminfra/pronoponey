import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 21

export const initWeek21 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['SCO']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-02-01T19:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-02-01T19:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-02-01T19:00:00.000')),
    weekNumber,
    0,
    2
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-02-01T19:00:00.000')),
    weekNumber,
    4,
    2
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-02-01T19:00:00.000')),
    weekNumber,
    4,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-02-01T21:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-02-01T21:00:00.000')),
    weekNumber,
    0,
    0
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-02-01T21:00:00.000')),
    weekNumber,
    3,
    2
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-02-01T21:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-02-01T21:00:00.000')),
    weekNumber,
    3,
    0
  )
}
