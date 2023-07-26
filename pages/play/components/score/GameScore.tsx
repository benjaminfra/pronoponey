import { HStack, Box, Text } from '@chakra-ui/react'
import TeamScore from './TeamScore'
import { IGame } from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import {
  IPronostic,
  NewPronostic
} from '../../../../server/db/models/pronosticModel'

type GameScoreProps = {
  game: IGame
  pronostic?: IPronostic
  saveProno: (pronostic: NewPronostic) => void
}

function GameScore({ game, pronostic, saveProno }: GameScoreProps) {
  const isPlayable = new Date(game.date) > new Date()
  const saveHomeProno = (value: number) => {
    saveProno({
      gameId: game._id,
      weekNumber: game.weekNumber,
      homeScore: value
    })
  }

  const saveAwayProno = (value: number) => {
    saveProno({
      gameId: game._id,
      weekNumber: game.weekNumber,
      awayScore: value
    })
  }

  return (
    <HStack justifyContent="center">
      <TeamScore
        team={game.homeTeam as ITeam}
        score={game.homeScore}
        isPlayable={isPlayable}
        saveProno={saveHomeProno}
        pronosticScore={pronostic?.homeScore}
      />
      <Box>
        <Text>-</Text>
      </Box>
      <TeamScore
        team={game.awayTeam as ITeam}
        score={game.awayScore}
        isAwayTeam
        isPlayable={isPlayable}
        saveProno={saveAwayProno}
        pronosticScore={pronostic?.awayScore}
      />
    </HStack>
  )
}

export default GameScore
