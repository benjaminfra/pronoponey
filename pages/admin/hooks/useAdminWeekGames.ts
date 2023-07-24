import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame, NewGame, UpdateGame } from '../../../server/db/models/gameModel'
import { ITeam } from '../../../server/db/models/teamModel'
import {
  assignTeamsToGame,
  assignTeamsToGames
} from '../../../helpers/games.utils'
import { ensure } from '../../../helpers/types.helpers'

const useAdminWeekGames = (weekNumber?: number, teams?: ITeam[]) => {
  const [weekGames, setWeekGames] = useState<IGame[]>([])
  const [isWeekGamesLoading, setIsWeekGamesLoading] = useState<boolean>(true)
  const toast = useToast()

  const { gamesService } = useContext(ServiceContext)

  useEffect(() => {
    if (!weekNumber || !teams) {
      return
    }
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
      let savedGame = await gamesService.createGame(newGame)
      savedGame = await assignTeamsToGame(savedGame, ensure(teams))
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

  const handleDeleteGame = async (gameId: string) => {
    try {
      await gamesService.deleteGame(gameId)
      setWeekGames(weekGames.filter((game) => game._id.toString() !== gameId))
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

  const handleUpdateGame = async (game: UpdateGame, gameId: string) => {
    try {
      let updatedGame = await gamesService.updateGame(gameId, game)
      updatedGame = await assignTeamsToGame(updatedGame, ensure(teams))
      const index = weekGames.findIndex(
        (weekGame) => weekGame._id === updatedGame._id
      )
      if (index !== -1) {
        weekGames[index] = updatedGame
        setWeekGames([...weekGames])
      }
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

  return {
    weekGames,
    handleCreateGame,
    handleDeleteGame,
    handleUpdateGame,
    isWeekGamesLoading
  }
}

export default useAdminWeekGames
