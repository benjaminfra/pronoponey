import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 9

export const initWeek9 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['SCO']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2022-09-30T21:00:00.000')),
    weekNumber,
    0,
    3
  )

  saveGame(
    teamIds['RCSA']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2022-10-01T17:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2022-10-01T21:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2022-10-02T13:00:00.000')),
    weekNumber,
    2,
    1
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2022-10-02T15:00:00.000')),
    weekNumber,
    1,
    3
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2022-10-02T15:00:00.000')),
    weekNumber,
    1,
    1
  )

  saveGame(
    teamIds['TFC']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2022-10-02T15:00:00.000')),
    weekNumber,
    4,
    2
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2022-10-02T15:00:00.000')),
    weekNumber,
    2,
    2
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['FCN']._id,
    new Date(Date.parse('2022-10-02T17:00:00.000')),
    weekNumber,
    4,
    1
  )

  saveGame(
    teamIds['RCL']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2022-10-02T21:00:00.000')),
    weekNumber,
    1,
    0
  )
}
