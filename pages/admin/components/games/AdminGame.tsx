import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { IGame, UpdateGame } from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import TeamDisplay from '../../../../common/components/team/TeamDisplay'
import FullyScore from '../../../../common/components/score/FullyScore'
import AdminGameToolBar from './AdminGameToolsBar'

type AdminGameProps = {
  game: IGame
  updateGameFct: (game: UpdateGame, gameId: string) => void
  deleteGameFct: (gameId: string) => void
}

function AdminGame({ game, updateGameFct, deleteGameFct }: AdminGameProps) {
  return (
    <Box bg="white" rounded="lg" w="100%" p={8}>
      <HStack justifyContent="space-between">
        <Text fontWeight="bold">
          {DateTime.fromISO(game.date.toString()).toLocaleString(
            DateTime.DATETIME_SHORT
          )}
        </Text>
        <Box>
          <AdminGameToolBar
            game={game}
            deleteGameFct={deleteGameFct}
            updateGameFct={updateGameFct}
          />
        </Box>
      </HStack>
      <Divider mt={2} />
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
