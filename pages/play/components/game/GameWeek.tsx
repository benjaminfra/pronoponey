import { Center, Spinner, VStack } from '@chakra-ui/react'
import { ensure } from '../../../../helpers/types.helpers'
import { ITeam } from '../../../../server/db/models/teamModel'
import GameCard from './GameCard'
import { DateTime } from 'luxon'
import { useContext } from 'react'
import { GamesContext } from '../../GameContextProvider'

interface IGameWeek {
  teams: ITeam[]
}

const GameWeek = ({ teams }: IGameWeek) => {
  const { games, isGamesLoading } = useContext(GamesContext)

  const gamesWithTeams =
    games &&
    games.length &&
    games.map((weekGame) => {
      const awayTeam = ensure(
        teams.find((team) => team._id === weekGame.awayTeam)
      )
      const homeTeam = ensure(
        teams.find((team) => team._id === weekGame.homeTeam)
      )
      return {
        id: weekGame._id,
        date: DateTime.fromISO(weekGame.date.toString()),
        awayScore: weekGame.awayScore,
        homeScore: weekGame.homeScore,
        homeTeam,
        awayTeam,
      }
    })

  return (
    <>
      {isGamesLoading && (
        <Center mt="100px">
          <Spinner />
        </Center>
      )}
      {!isGamesLoading && (
        <VStack spacing="1em" display="block">
          {gamesWithTeams &&
            gamesWithTeams.map((game) => (
              <GameCard
                homeScore={game.homeScore}
                awayScore={game.awayScore}
                gameDate={game.date}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                key={game.id.toString()}
              />
            ))}
        </VStack>
      )}
    </>
  )
}

export default GameWeek