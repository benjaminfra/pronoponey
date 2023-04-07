import { Center, Spinner, VStack } from '@chakra-ui/react'
import { ensure } from '../../../../helpers/types.helpers'
import { ITeam } from '../../../../server/db/models/teamModel'
import GameCard from './GameCard'
import { DateTime } from 'luxon'
import { IGame } from '../../../../server/db/models/gameModel'
import { GameProps } from '../../types'

interface IGameWeek {
  teams: ITeam[]
  games: IGame[]
  isLoading: boolean
}

const GameWeek = ({ teams, games, isLoading }: IGameWeek) => {
  const gamesWithTeams: GameProps[] = Array.isArray(games)
    ? games.map((weekGame) => {
        const awayTeam = ensure(
          teams.find((team) => team._id === weekGame.awayTeam)
        )
        const homeTeam = ensure(
          teams.find((team) => team._id === weekGame.homeTeam)
        )
        return {
          gameId: weekGame._id,
          gameDate: DateTime.fromISO(weekGame.date.toString()),
          awayScore: weekGame.awayScore,
          homeScore: weekGame.homeScore,
          homeTeam,
          awayTeam,
          weekNumber: weekGame.weekNumber,
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
            gamesWithTeams.map((game, index) => (
              <GameCard game={game} key={index} />
            ))}
        </VStack>
      )}
    </>
  )
}

export default GameWeek
