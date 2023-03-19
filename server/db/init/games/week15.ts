import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 15

export const initWeek15 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OL']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-11-11T21:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-11-12T17:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2022-11-12T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-11-13T13:00:00.000')),
    weekNumber,
    5,
    0
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2022-11-13T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['SCO']._id,
    new Date(Date.parse('2022-11-13T15:00:00.000')),
    weekNumber,
    1,
    0
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-11-13T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2022-11-13T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-11-13T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-11-13T21:00:00.000')),
    weekNumber,
    2,
    3
  )
}
