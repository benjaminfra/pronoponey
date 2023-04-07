import GameWeek from './components/game/GameWeek'
import WeekSelector from './components/season/WeekSelector'
import { Box } from '@chakra-ui/react'
import { IWeek } from '../../server/db/models/weekModel'
import { ITeam } from '../../server/db/models/teamModel'
import { useGames } from './hooks/useGames'

interface PageProps {
  weeks: IWeek[]
  teams: ITeam[]
}

export const Page = (pageProps: PageProps) => {
  const { getGames, games, isLoading } = useGames()

  return (
    <>
      <Box marginTop="1em">
        <WeekSelector weeks={pageProps.weeks} getGames={getGames} />
      </Box>
      <Box marginTop="1em">
        <GameWeek teams={pageProps.teams} games={games} isLoading={isLoading} />
      </Box>
    </>
  )
}
