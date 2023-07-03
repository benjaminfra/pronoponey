import { Box } from '@chakra-ui/react'
import GameScore from '../score/GameScore'
import { GameProps, SavePronoFunction } from '../../types'
import PronosticCard from '../pronostic/PronosticCard'

type GameCardProps = {
  game: GameProps
  saveProno: SavePronoFunction
}

function GameCard({ game, saveProno }: GameCardProps) {
  return (
    <Box
      border="1px"
      borderColor="gray.400"
      borderRadius="10px"
      backgroundColor="white"
      padding="1em"
    >
      <GameScore game={game} saveProno={saveProno} />
      <PronosticCard pronostic={game.pronostic} />
    </Box>
  )
}

export default GameCard
