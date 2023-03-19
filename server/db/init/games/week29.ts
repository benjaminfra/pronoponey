import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 29

export const initWeek29 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['OM']._id,
    teamIds['MHSC']._id,
    new Date(Date.parse('2023-03-31T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['AJA']._id,
    teamIds['ESTAC']._id,
    new Date(Date.parse('2023-04-01T19:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SRFC']._id,
    teamIds['RCL']._id,
    new Date(Date.parse('2023-04-01T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['LOSC']._id,
    teamIds['FCL']._id,
    new Date(Date.parse('2023-04-02T13:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['OGCN']._id,
    new Date(Date.parse('2023-04-02T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SB29']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-04-02T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['CFA']._id,
    teamIds['ACA']._id,
    new Date(Date.parse('2023-04-02T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['SDR']._id,
    new Date(Date.parse('2023-04-02T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['ASM']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-04-02T17:05:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['PSG']._id,
    teamIds['OL']._id,
    new Date(Date.parse('2023-04-02T20:45:00.000')),
    weekNumber
  )
}
