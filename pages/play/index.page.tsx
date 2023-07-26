/* eslint-disable import/prefer-default-export */
import { Box } from '@chakra-ui/react'
import GameWeek from './components/game/GameWeek'
import WeekSelector from './components/season/WeekSelector'
import { IWeek } from '../../server/db/models/weekModel'
import { ITeam } from '../../server/db/models/teamModel'
import useGames from './hooks/useGames'
import usePronostics from './hooks/usePronostics'

type PageProps = {
  weeks: IWeek[]
  teams: ITeam[]
}

export function Page({ weeks, teams }: PageProps) {
  const { getGames, games, isGamesLoading } = useGames(teams)
  const {
    pronostics,
    saveProno,
    findPronosticsByWeekNumber,
    isPronosticsLoading
  } = usePronostics()

  return (
    <Box mx={10}>
      <Box mb={10} mt={3} width="30%" mx="auto">
        <WeekSelector
          weeks={weeks}
          getGames={getGames}
          getPronostics={findPronosticsByWeekNumber}
        />
      </Box>
      <Box marginTop="1em">
        <GameWeek
          games={games}
          isLoading={isGamesLoading || isPronosticsLoading}
          saveProno={saveProno}
          pronostics={pronostics}
        />
      </Box>
    </Box>
  )
}
