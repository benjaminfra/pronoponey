import TeamScore from './TeamScore'
import { HStack, Box, Text } from '@chakra-ui/react'
import { IGame } from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import { DateTime } from 'luxon'

interface GameScoreProps {
  homeScore?: number
  awayScore?: number
  homeTeam: ITeam
  awayTeam: ITeam
  gameDate: DateTime
}

const GameScore = ({
  homeScore,
  awayScore,
  homeTeam,
  awayTeam,
  gameDate,
}: GameScoreProps) => {
  const isPlayable = gameDate > DateTime.now()

  return (
    <HStack justifyContent="center">
      <TeamScore team={homeTeam} score={homeScore} isPlayable={isPlayable} />
      <Box>
        <Text>-</Text>
      </Box>
      <TeamScore
        team={awayTeam}
        score={awayScore}
        isAwayTeam={true}
        isPlayable={isPlayable}
      />
    </HStack>
  )
}

export default GameScore
