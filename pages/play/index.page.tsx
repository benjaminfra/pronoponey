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
  const { getGames, games, isGamesLoading } = useGames()
  const {
    pronostics,
    saveProno,
    findPronosticsByWeekNumber,
    isPronosticsLoading
  } = usePronostics()

  return (
    <>
      <Box marginTop="1em">
        <WeekSelector
          weeks={weeks}
          getGames={getGames}
          getPronostics={findPronosticsByWeekNumber}
        />
      </Box>
      <Box marginTop="1em">
        <GameWeek
          teams={teams}
          games={games}
          isLoading={isGamesLoading || isPronosticsLoading}
          pronostics={pronostics}
          saveProno={saveProno}
        />
      </Box>
    </>
  )
}
