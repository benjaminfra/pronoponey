/* eslint-disable import/prefer-default-export */
import { Box, Center, HStack, Heading, Spinner } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { ITeam } from '../../../../server/db/models/teamModel'
import { IWeek } from '../../../../server/db/models/weekModel'
import useAdminWeekGames from '../../hooks/useAdminWeekGames'
import AdminGameForm from '../../components/games/AdminGameForm'
import AdminGamesList from '../../components/games/AdminGamesList'
import WeekToolBar from '../../components/weeks/WeekToolsBar'

type PageProps = {
  week: IWeek
  teams: ITeam[]
}

export function Page({ week, teams }: PageProps) {
  const { weekGames, handleCreateGame, isWeekGamesLoading } = useAdminWeekGames(
    week.weekNumber,
    teams
  )

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
      <HStack spacing={15} width="100%" marginTop={5}>
        <Box flex={1}>
          {isWeekGamesLoading && (
            <Center>
              <Spinner />
            </Center>
          )}
          {!isWeekGamesLoading && <AdminGamesList games={weekGames} />}
        </Box>
        <Box flex={1}>
          <AdminGameForm
            onSubmitFct={handleCreateGame}
            teams={teams}
            week={week}
          />
        </Box>
      </HStack>
    </>
  )
}
