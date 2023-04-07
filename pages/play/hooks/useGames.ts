import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame } from '../../../server/db/models/gameModel'

export const useGames = () => {
  const { gamesService } = useContext(ServiceContext)
  const [games, setGames] = useState<IGame[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getGames = async (weekNumber: number) => {
    setIsLoading(true)
    const games = await gamesService.getGamesByWeekNumber(weekNumber)
    setGames(games)
    setIsLoading(false)
  }

  return { games, getGames, isLoading }
}
