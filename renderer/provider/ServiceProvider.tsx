import AuthService from '../../api/auth.api'
import GamesService from '../../api/games.api'
import PronosticService from '../../api/pronostic.api'
import { createContext, useMemo } from 'react'
import axios from 'axios'

interface IServiceProvider {
  children: React.ReactNode
}

interface IServiceContext {
  authService: AuthService
  gamesService: GamesService
  pronosticsService: PronosticService
}

export const ServiceContext = createContext<IServiceContext>({
  authService: new AuthService(),
  gamesService: new GamesService(),
  pronosticsService: new PronosticService(),
})

const ServiceProvider = ({ children }: IServiceProvider) => {
  const serviceContext = useMemo(
    () => ({
      authService: new AuthService(),
      gamesService: new GamesService(),
      pronosticsService: new PronosticService(),
    }),
    []
  )

  if (typeof window !== 'undefined') {
    axios.defaults.headers.common['Authorization'] = document.cookie
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
