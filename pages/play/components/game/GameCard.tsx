import { Box, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import GameScore from '../score/GameScore'
import { IGame } from '../../../../server/db/models/gameModel'
import {
  IPronostic,
  NewPronostic
} from '../../../../server/db/models/pronosticModel'

type GameCardProps = {
  game: IGame
  pronostic?: IPronostic
  saveProno: (pronostic: NewPronostic) => void
}

function GameCard({ game, pronostic, saveProno }: GameCardProps) {
  return (
    <Box
      borderRadius="xl"
      bgGradient="linear(to-l, #192531, #213242)"
      padding="1em"
    >
      <Text fontSize="xl" fontWeight="bold" color="white">
        {DateTime.fromJSDate(game.date).toISOTime()}
      </Text>
      <GameScore game={game} saveProno={saveProno} pronostic={pronostic} />
    </Box>
  )
}

export default GameCard
