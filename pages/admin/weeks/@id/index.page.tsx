/* eslint-disable import/prefer-default-export */
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Spinner,
  VStack,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { ITeam } from '../../../../server/db/models/teamModel'
import { IWeek } from '../../../../server/db/models/weekModel'
import useAdminWeekGames from '../../hooks/useAdminWeekGames'
import AdminGameForm from '../../components/games/AdminGameForm'
import AdminGamesList from '../../components/games/AdminGamesList'
import WeekToolBar from '../../components/weeks/WeekToolsBar'
import GameFormModal from '../../components/games/modal/GameFormModal'

type PageProps = {
  week: IWeek
  teams: ITeam[]
}

export function Page({ week, teams }: PageProps) {
  const {
    weekGames,
    handleCreateGame,
    isWeekGamesLoading,
    handleDeleteGame,
    handleUpdateGame
  } = useAdminWeekGames(week.weekNumber, teams)

  const [isMobile] = useMediaQuery('(max-width: 1240px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack>
        <Heading as="h1">{`Journée n°${
          week.weekNumber
        } à la date du ${DateTime.fromISO(
          week.date.toString()
        ).toLocaleString()}`}</Heading>
        <Box marginLeft={5}>
          <WeekToolBar week={week} />
        </Box>
      </HStack>
      {!isMobile && (
        <HStack spacing={15} width="100%" marginTop={5}>
          <Box flex={1}>
            {isWeekGamesLoading && (
              <Center>
                <Spinner />
              </Center>
            )}
            {!isWeekGamesLoading && (
              <AdminGamesList
                games={weekGames}
                deleteGameFct={handleDeleteGame}
                updateGameFct={handleUpdateGame}
              />
            )}
          </Box>
          <Box flex={1}>
            <AdminGameForm
              onSubmitFct={handleCreateGame}
              teams={teams}
              weekNumber={week.weekNumber}
            />
          </Box>
        </HStack>
      )}
      {isMobile && (
        <VStack mt={5} align="stretch">
          <Box flex={1}>
            {isWeekGamesLoading && (
              <Center>
                <Spinner />
              </Center>
            )}
            {!isWeekGamesLoading && (
              <AdminGamesList
                games={weekGames}
                deleteGameFct={handleDeleteGame}
                updateGameFct={handleUpdateGame}
              />
            )}
          </Box>
          <Box>
            <Button
              width="100%"
              textAlign="center"
              rounded="md"
              boxShadow="md"
              p={5}
              marginTop="1em"
              marginBottom="1em"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
              onClick={onOpen}
            >
              Ajouter un match
            </Button>
            <GameFormModal
              isOpen={isOpen}
              onClose={onClose}
              submitFct={handleCreateGame}
              teams={teams}
              weekNumber={week.weekNumber}
            />
          </Box>
        </VStack>
      )}
    </>
  )
}
