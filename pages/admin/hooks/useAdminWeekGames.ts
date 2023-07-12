import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame } from '../../../server/db/models/gameModel'

const useAdminWeekGames = (weekNumber: number) => {
  const [weekGames, setWeekGames] = useState<IGame[]>([])
  const [isWeekGamesLoading, setIsWeekGamesLoading] = useState<boolean>(true)
  const toast = useToast()

  const { gamesService } = useContext(ServiceContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await gamesService.getGamesByWeekNumber(weekNumber)
      setWeekGames(data)
    }
    fetchData()
    setIsWeekGamesLoading(false)
  }, [])

  return { weekGames, isWeekGamesLoading }
}

export default useAdminWeekGames
