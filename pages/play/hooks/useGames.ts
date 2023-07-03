import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame } from '../../../server/db/models/gameModel'

const useGames = () => {
  const { gamesService } = useContext(ServiceContext)
  const [games, setGames] = useState<IGame[]>([])
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false)

  const getGames = async (weekNumber: number): Promise<void> => {
    setIsGamesLoading(true)
    const weekGames = await gamesService.getGamesByWeekNumber(weekNumber)
    setGames(weekGames)
    setIsGamesLoading(false)
  }

  return { games, getGames, isGamesLoading }
}

export default useGames
