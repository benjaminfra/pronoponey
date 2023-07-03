import { DateTime } from 'luxon'
import { Types } from 'mongoose'
import { ITeam } from '../../server/db/models/teamModel'

export type TeamProps = {
  name: string
  shortname: string
  logoURI: string
}

export type GameProps = {
  homeScore?: number
  awayScore?: number
  homeTeam: ITeam
  awayTeam: ITeam
  gameDate: DateTime
  gameId: Types.ObjectId
  weekNumber: number
  pronostic?: PronosticProps
}

export type PronosticProps = {
  gameId: Types.ObjectId
  weekNumber: number
  homeScore: number
  awayScore: number
  points?: number
}

export type SavePronoFunction = (
  gameId: Types.ObjectId,
  weekNumber: number,
  score: number,
  isAwayTeam?: boolean
) => void
