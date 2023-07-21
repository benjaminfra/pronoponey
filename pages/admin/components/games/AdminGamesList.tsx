import { VStack } from '@chakra-ui/react'
import { IGame, UpdateGame } from '../../../../server/db/models/gameModel'
import AdminGame from './AdminGame'

type AdminGamesListProps = {
  games: IGame[]
  updateGameFct: (game: UpdateGame, gameId: string) => void
  deleteGameFct: (gameId: string) => void
}

function AdminGamesList({
  games,
  updateGameFct,
  deleteGameFct
}: AdminGamesListProps) {
  return (
    <VStack>
      {games.map((game) => (
        <AdminGame
          key={game._id.toString()}
          game={game}
          deleteGameFct={deleteGameFct}
          updateGameFct={updateGameFct}
        />
      ))}
    </VStack>
  )
}

export default AdminGamesList
