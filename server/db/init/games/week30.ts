import { Types } from 'mongoose'
import { saveGame } from '../../models/gameModel'

const weekNumber = 30

export const initWeek30 = (teamIds: Record<string, Types.ObjectId>) => {
  saveGame(
    teamIds['RCL']._id,
    teamIds['RCSA']._id,
    new Date(Date.parse('2023-04-07T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SCO']._id,
    teamIds['LOSC']._id,
    new Date(Date.parse('2023-04-08T19:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['OGCN']._id,
    teamIds['PSG']._id,
    new Date(Date.parse('2023-04-08T21:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['OL']._id,
    teamIds['SRFC']._id,
    new Date(Date.parse('2023-04-09T13:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['ACA']._id,
    teamIds['AJA']._id,
    new Date(Date.parse('2023-04-09T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['MHSC']._id,
    teamIds['TFC']._id,
    new Date(Date.parse('2023-04-09T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['SDR']._id,
    teamIds['SB29']._id,
    new Date(Date.parse('2023-04-09T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['ESTAC']._id,
    teamIds['CFA']._id,
    new Date(Date.parse('2023-04-09T15:00:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['FCN']._id,
    teamIds['ASM']._id,
    new Date(Date.parse('2023-04-09T17:05:00.000')),
    weekNumber
  )

  saveGame(
    teamIds['FCL']._id,
    teamIds['OM']._id,
    new Date(Date.parse('2023-04-09T20:45:00.000')),
    weekNumber
  )
}
