import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame } from '../../../server/db/models/gameModel'

export const useGames = () => {
  const { gamesService } = useContext(ServiceContext)
  const [games, setGames] = useState<IGame[]>([])
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false)

  const getGames = async (weekNumber: number) => {
    setIsGamesLoading(true)
    const games = await gamesService.getGamesByWeekNumber(weekNumber)
    setGames(games)
    setIsGamesLoading(false)
  }

  return { games, getGames, isGamesLoading }
}
