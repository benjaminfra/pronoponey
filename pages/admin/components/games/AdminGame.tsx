import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { IGame } from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import TeamDisplay from '../../../../common/components/team/TeamDisplay'
import FullyScore from '../../../../common/components/score/FullyScore'

type AdminGameProps = {
  game: IGame
}

function AdminGame({ game }: AdminGameProps) {
  return (
    <Box bg="white" rounded="lg" w="100%" p={8}>
      <Box>
        <Text fontWeight="bold">
          {DateTime.fromISO(game.date.toString()).toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </Text>
      </Box>
      <Divider />
      <HStack mt={5}>
        <Box flex={2}>
          <TeamDisplay team={game.homeTeam as ITeam} />
        </Box>
        <Center flex={1}>
          <FullyScore awayScore={game.awayScore} homeScore={game.homeScore} />
        </Center>
        <Box flex={2}>
          <TeamDisplay team={game.awayTeam as ITeam} />
        </Box>
      </HStack>
    </Box>
  )
}

export default AdminGame
