import TeamScore from './TeamScore'
import { HStack, Box, Text } from '@chakra-ui/react'
import { ITeam } from '../../../../server/db/models/teamModel'
import { DateTime } from 'luxon'

interface GameScoreProps {
  homeScore?: number
  awayScore?: number
  homeTeam: ITeam
  awayTeam: ITeam
  gameDate: DateTime
  saveProno: Function
}

const GameScore = ({
  homeScore,
  awayScore,
  homeTeam,
  awayTeam,
  gameDate,
  saveProno,
}: GameScoreProps) => {
  const isPlayable = gameDate > DateTime.now()

  return (
    <HStack justifyContent="center">
      <TeamScore
        team={homeTeam}
        score={homeScore}
        isPlayable={isPlayable}
        saveProno={saveProno}
      />
      <Box>
        <Text>-</Text>
      </Box>
      <TeamScore
        team={awayTeam}
        score={awayScore}
        isAwayTeam={true}
        isPlayable={isPlayable}
        saveProno={saveProno}
      />
    </HStack>
  )
}

export default GameScore
