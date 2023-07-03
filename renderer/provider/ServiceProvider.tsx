import { createContext, useMemo } from 'react'
import axios from 'axios'
import AuthService from '../../api/auth.api'
import GamesService from '../../api/games.api'
import PronosticService from '../../api/pronostic.api'
import TeamsService from '../../api/teams.api'
import WeeksService from '../../api/weeks.api'

type IServiceProvider = {
  children: React.ReactNode
}

type IServiceContext = {
  authService: AuthService
  gamesService: GamesService
  pronosticsService: PronosticService
  teamsService: TeamsService
  weeksService: WeeksService
}

export const ServiceContext = createContext<IServiceContext>({
  authService: new AuthService(),
  gamesService: new GamesService(),
  pronosticsService: new PronosticService(),
  teamsService: new TeamsService(),
  weeksService: new WeeksService()
})

function ServiceProvider({ children }: IServiceProvider) {
  const serviceContext = useMemo(
    () => ({
      authService: new AuthService(),
      gamesService: new GamesService(),
      pronosticsService: new PronosticService(),
      teamsService: new TeamsService(),
      weeksService: new WeeksService()
    }),
    []
  )

  if (typeof window !== 'undefined') {
    axios.defaults.headers.common.Authorization = document.cookie
      ? JSON.parse(decodeURIComponent(document.cookie.split('=')[1])).tokens[0]
          .token
      : ''
  }

  return (
    <ServiceContext.Provider value={serviceContext}>
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider
