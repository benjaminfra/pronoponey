import TeamScore from './TeamScore'
import { HStack, Box, Text } from '@chakra-ui/react'
import { ITeam } from '../../../../server/db/models/teamModel'
import { DateTime } from 'luxon'
import { GameProps, PronosticProps } from '../../types'

interface GameScoreProps {
  game: GameProps
  saveProno: Function
}

const GameScore = ({ game, saveProno }: GameScoreProps) => {
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
        isAwayTeam={true}
        isPlayable={isPlayable}
        saveProno={saveAwayProno}
        pronosticScore={game.pronostic?.awayScore}
      />
    </HStack>
  )
}

export default GameScore
