import { Box } from '@chakra-ui/react'
import GameScore from '../score/GameScore'
import { GameProps } from '../../types'

interface GameCardProps {
  game: GameProps
  saveProno: Function
}

const GameCard = ({ game, saveProno }: GameCardProps) => {
  return (
    <Box
      border="1px"
      borderColor="gray.400"
      borderRadius="10px"
      backgroundColor="white"
      padding="1em"
    >
      <GameScore game={game} saveProno={saveProno} />
    </Box>
  )
}

export default GameCard
