import { HStack, Box, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import TeamScore from './TeamScore'
import { GameProps, SavePronoFunction } from '../../types'

type GameScoreProps = {
  game: GameProps
  saveProno: SavePronoFunction
}

function GameScore({ game, saveProno }: GameScoreProps) {
  const isPlayable = game.gameDate > DateTime.now()

  const saveHomeProno = (value: number) => {
    saveProno(game.gameId, game.weekNumber, value, false)
  }

  const saveAwayProno = (value: number) => {
    saveProno(game.gameId, game.weekNumber, value, true)
  }

  return (
    <HStack justifyContent="center">
      <TeamScore
        team={game.homeTeam}
        score={game.homeScore}
        isPlayable={isPlayable}
        saveProno={saveHomeProno}
        pronosticScore={game.pronostic?.homeScore}
      />
      <Box>
        <Text>-</Text>
      </Box>
      <TeamScore
        team={game.awayTeam}
        score={game.awayScore}
        isAwayTeam
        isPlayable={isPlayable}
        saveProno={saveAwayProno}
        pronosticScore={game.pronostic?.awayScore}
      />
    </HStack>
  )
}

export default GameScore
