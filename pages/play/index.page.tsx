import GameWeek from './components/game/GameWeek'
import WeekSelector from './components/season/WeekSelector'
import { Box } from '@chakra-ui/react'
import { IWeek } from '../../server/db/models/weekModel'
import { ITeam } from '../../server/db/models/teamModel'
import GameContextProvider from './GameContextProvider'
import { useContext } from 'react'
import { AuthContext } from '../../renderer/provider/AuthProvider'

interface PageProps {
  weeks: IWeek[]
  teams: ITeam[]
}

export const Page = (pageProps: PageProps) => {
  return (
    <GameContextProvider>
      <Box marginTop="1em">
        <WeekSelector weeks={pageProps.weeks} />
      </Box>
      <Box marginTop="1em">
        <GameWeek teams={pageProps.teams} />
      </Box>
    </GameContextProvider>
  )
}
