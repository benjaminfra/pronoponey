import { Box } from '@chakra-ui/react'
import GameScore from '../score/GameScore'
import { GameProps } from '../../types'
import { usePronostics } from '../../hooks/usePronostics'

interface GameCardProps {
  game: GameProps
}

const GameCard = ({ game }: GameCardProps) => {
  const { saveProno } = usePronostics(game.gameId, game.weekNumber, 0, 0)

  return (
    <Box
      border="1px"
      borderColor="gray.400"
      borderRadius="10px"
      backgroundColor="white"
      padding="1em"
    >
      <GameScore
        homeScore={game.homeScore}
        awayScore={game.awayScore}
        gameDate={game.gameDate}
        homeTeam={game.homeTeam}
        awayTeam={game.awayTeam}
        saveProno={saveProno}
      />
    </Box>
  )
}

export default GameCard
