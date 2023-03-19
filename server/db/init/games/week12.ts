import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 12

export const initWeek12 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['ACA']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2022-10-21T21:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-10-22T17:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['OM']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2022-10-22T21:00:00.000')),
    weekNumber,
    0,
    1
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-10-23T13:00:00.000')),
    weekNumber,
    1,
    2
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-10-23T15:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2022-10-23T15:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2022-10-23T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2022-10-23T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-10-23T17:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2022-10-23T21:00:00.000')),
    weekNumber,
    4,
    3
  )
}
