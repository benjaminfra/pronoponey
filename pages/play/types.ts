import { DateTime } from 'luxon'
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
}
