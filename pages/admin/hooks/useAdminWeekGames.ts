import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame, NewGame } from '../../../server/db/models/gameModel'

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

  const handleCreateGame = async (newGame: NewGame) => {
    try {
      const savedGame = await gamesService.createGame(newGame)
      setWeekGames([...weekGames, savedGame])
    } catch (error: any) {
      toast({
        title: 'Une erreur est survenue',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return { weekGames, handleCreateGame, isWeekGamesLoading }
}

export default useAdminWeekGames
