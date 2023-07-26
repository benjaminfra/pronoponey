import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IGame } from '../../../server/db/models/gameModel'
import { ITeam } from '../../../server/db/models/teamModel'
import { assignTeamsToGames } from '../../../helpers/games.utils'

const useGames = (teams: ITeam[]) => {
  const { gamesService } = useContext(ServiceContext)
  const [games, setGames] = useState<IGame[]>([])
  const [isGamesLoading, setIsGamesLoading] = useState<boolean>(false)

  const getGames = async (weekNumber: number): Promise<void> => {
    setIsGamesLoading(true)
    let weekGames = await gamesService.getGamesByWeekNumber(weekNumber)
    weekGames = await assignTeamsToGames(weekGames, teams)
    setGames(weekGames)
    setIsGamesLoading(false)
  }

  return { games, getGames, isGamesLoading }
}

export default useGames
