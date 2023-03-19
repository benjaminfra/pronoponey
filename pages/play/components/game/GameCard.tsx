import { Box } from '@chakra-ui/react'
import GameScore from '../score/GameScore'
import { GameProps } from '../../types'

const GameCard = ({
  homeScore,
  awayScore,
  gameDate,
  homeTeam,
  awayTeam,
}: GameProps) => {
  return (
    <Box
      border="1px"
      borderColor="gray.400"
      borderRadius="10px"
      backgroundColor="white"
      padding="1em"
    >
      <GameScore
        homeScore={homeScore}
        awayScore={awayScore}
        gameDate={gameDate}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
    </Box>
  )
}

export default GameCard
