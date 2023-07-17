import { VStack } from '@chakra-ui/react'
import { IGame } from '../../../../server/db/models/gameModel'
import AdminGame from './AdminGame'

type AdminGamesListProps = {
  games: IGame[]
}

function AdminGamesList({ games }: AdminGamesListProps) {
  return (
    <VStack>
      {games.map((game) => (
        <AdminGame key={game._id.toString()} game={game} />
      ))}
    </VStack>
  )
}

export default AdminGamesList
