import { Center, Grid, Spinner } from '@chakra-ui/react'
import GameCard from './GameCard'
import { IGame } from '../../../../server/db/models/gameModel'
import {
  IPronostic,
  NewPronostic
} from '../../../../server/db/models/pronosticModel'

type IGameWeek = {
  games: IGame[]
  pronostics: IPronostic[]
  saveProno: (pronostic: NewPronostic) => void
  isLoading: boolean
}

function GameWeek({ games, pronostics, saveProno, isLoading }: IGameWeek) {
  return (
    <>
      {isLoading && (
        <Center mt="100px">
          <Spinner />
        </Center>
      )}
      {!isLoading && (
        <Grid templateColumns="repeat(1, 1fr)" gap={5}>
          {games.map((game) => (
            <GameCard
              game={game}
              key={game._id.toString()}
              saveProno={saveProno}
              pronostic={pronostics.find((p) => p.gameId === game._id)}
            />
          ))}
        </Grid>
      )}
    </>
  )
}

export default GameWeek
