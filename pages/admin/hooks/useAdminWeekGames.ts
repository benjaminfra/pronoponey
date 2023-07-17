import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame, NewGame } from '../../../server/db/models/gameModel'
import { ITeam } from '../../../server/db/models/teamModel'
import { assignTeamsToGames } from '../../../helpers/games.utils'

const useAdminWeekGames = (weekNumber: number, teams: ITeam[]) => {
  const [weekGames, setWeekGames] = useState<IGame[]>([])
  const [isWeekGamesLoading, setIsWeekGamesLoading] = useState<boolean>(true)
  const toast = useToast()

  const { gamesService } = useContext(ServiceContext)

  useEffect(() => {
    const fetchData = async () => {
      let data = await gamesService.getGamesByWeekNumber(weekNumber)
      data = await assignTeamsToGames(data, teams)
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
