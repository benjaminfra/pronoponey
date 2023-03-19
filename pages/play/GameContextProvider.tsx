import { useMemo, useCallback, createContext, useState } from 'react'
import { IGame } from '../../server/db/models/gameModel'
import { getGamesByWeekNumber } from '../../api/games.api'

interface IGameContextProvider {
  children: React.ReactNode
}

interface IGameContext {
  games: IGame[]
  getGames: (weekNumber: number) => Promise<void>
  isGamesLoading: boolean
}

export const GamesContext = createContext<IGameContext>({
  games: [],
  getGames: async () => {},
  isGamesLoading: false,
})

const GameContextProvider = ({ children }: IGameContextProvider) => {
  const [games, setGames] = useState<IGame[]>([])
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false)

  const getGames = async (weekNumber: number) => {
    setIsGamesLoading(true)
    const games = await getGamesByWeekNumber(weekNumber)
    setGames(games)
    setIsGamesLoading(false)
  }

  const memoizedGetGames = useCallback(async (weekNumber: number) => {
    await getGames(weekNumber)
  }, [])

  const gamesCtx = useMemo(
    () => ({
      games,
      getGames: memoizedGetGames,
      isGamesLoading,
    }),
    [games, memoizedGetGames, isGamesLoading]
  )

  return (
    <GamesContext.Provider value={gamesCtx}>{children}</GamesContext.Provider>
  )
}

export default GameContextProvider
