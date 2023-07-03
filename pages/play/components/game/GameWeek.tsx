import { DateTime } from 'luxon'
import { Center, Spinner, VStack } from '@chakra-ui/react'
import { ensure } from '../../../../helpers/types.helpers'
import { ITeam } from '../../../../server/db/models/teamModel'
import GameCard from './GameCard'
import { IGame } from '../../../../server/db/models/gameModel'
import { GameProps, PronosticProps, SavePronoFunction } from '../../types'

type IGameWeek = {
  teams: ITeam[]
  games: IGame[]
  pronostics: PronosticProps[]
  saveProno: SavePronoFunction
  isLoading: boolean
}

function GameWeek({
  teams,
  games,
  pronostics,
  saveProno,
  isLoading
}: IGameWeek) {
  const gamesWithTeams: GameProps[] = Array.isArray(games)
    ? games.map((weekGame) => {
        const awayTeam = ensure(
          teams.find((team) => team._id === weekGame.awayTeam)
        )
        const homeTeam = ensure(
          teams.find((team) => team._id === weekGame.homeTeam)
        )
        const pronostic = pronostics.find((p) => p.gameId === weekGame._id)
        return {
          gameId: weekGame._id,
          gameDate: DateTime.fromISO(weekGame.date.toString()),
          awayScore: weekGame.awayScore,
          homeScore: weekGame.homeScore,
          homeTeam,
          awayTeam,
          weekNumber: weekGame.weekNumber,
          pronostic
        }
      })
    : []

  return (
    <>
      {isLoading && (
        <Center mt="100px">
          <Spinner />
        </Center>
      )}
      {!isLoading && (
        <VStack spacing="1em" display="block">
          {gamesWithTeams &&
            gamesWithTeams.map((game) => (
              <GameCard
                game={game}
                key={game.gameId.toString()}
                saveProno={saveProno}
              />
            ))}
        </VStack>
      )}
    </>
  )
}

export default GameWeek
