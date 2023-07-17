import { ensure } from './types.helpers'
import { IGame } from '../server/db/models/gameModel'
import { ITeam } from '../server/db/models/teamModel'

export function assignTeamsToGame(game: IGame, teams: ITeam[]): IGame {
  const homeTeam = ensure(
    teams.find((team: ITeam) => team._id === game.homeTeam)
  )
  const awayTeam = ensure(
    teams.find((team: ITeam) => team._id === game.awayTeam)
  )
  return { ...game, homeTeam, awayTeam }
}

export async function assignTeamsToGames(
  games: IGame[],
  teams: ITeam[]
): Promise<IGame[]> {
  return games.map((game: IGame) => assignTeamsToGame(game, teams))
}
