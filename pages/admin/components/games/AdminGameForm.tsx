import { useState } from 'react'
import { DateTime } from 'luxon'
import {
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  VStack,
  Text
} from '@chakra-ui/react'
import { Types } from 'mongoose'
import {
  IGame,
  NewGame,
  UpdateGame
} from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import WeekGameSelector from './WeekGameSelector'
import InputDate from '../../../../common/components/form/InputDate'
import { ensure } from '../../../../helpers/types.helpers'

export type AdminGameFormFields = {
  homeTeam: string | undefined
  awayTeam: string | undefined
  gameDate: Date | undefined
}

type AdminGameFormProps = {
  teams: ITeam[]
  onSubmitFct: (game: NewGame | UpdateGame) => void
} & (
  | {
      game: IGame
      weekNumber?: number
    }
  | {
      weekNumber: number
      game?: IGame
    }
)

function AdminGameForm({
  teams,
  game,
  weekNumber,
  onSubmitFct
}: AdminGameFormProps) {
  const [gameFormFields, setGameFormFields] = useState<AdminGameFormFields>({
    homeTeam: game?.homeTeam._id.toString(),
    awayTeam: game?.awayTeam._id.toString(),
    gameDate: game
      ? DateTime.fromISO(game.date.toString()).toJSDate()
      : new Date()
  })

  const [hasError, setHasError] = useState(false)

  const setHomeTeamId = (teamId: string) => {
    setGameFormFields((prevState) => ({
      ...prevState,
      homeTeam: teamId
    }))
  }

  const setAwayTeamId = (teamId: string) => {
    setGameFormFields((prevState) => ({
      ...prevState,
      awayTeam: teamId
    }))
  }

  const setDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameFormFields((prevState) => ({
      ...prevState,
      gameDate: new Date(e.target.value)
    }))
  }

  const onSubmit = () => {
    if (
      !gameFormFields.homeTeam ||
      !gameFormFields.awayTeam ||
      !gameFormFields.gameDate
    ) {
      setHasError(true)
      return
    }
    onSubmitFct({
      homeTeam: new Types.ObjectId(gameFormFields.homeTeam),
      awayTeam: new Types.ObjectId(gameFormFields.awayTeam),
      date: gameFormFields.gameDate,
      weekNumber: game ? game.weekNumber : ensure(weekNumber)
    })
    setHasError(false)
  }

  return (
    <VStack bg="white" rounded="lg" p={6} align="stretch">
      <Box textAlign="center">
        <Text fontSize="2xl">
          {game ? 'Modifier un match' : 'Ajouter un match'}
        </Text>
      </Box>
      {hasError && (
        <Alert status="error" mt={5} mb={5}>
          <AlertIcon />
          <AlertTitle>Attention !</AlertTitle>
          <AlertDescription>Tous les champs sont requis</AlertDescription>
        </Alert>
      )}
      <Box mb={5} mt={5}>
        <InputDate
          label="Date du match"
          onChange={setDate}
          value={gameFormFields.gameDate}
          isRequired
          isDateTime
          name="gameDate"
        />
      </Box>
      <Box mb={5} mt={5}>
        <WeekGameSelector
          teams={teams}
          awayTeamValue={gameFormFields.awayTeam}
          homeTeamValue={gameFormFields.homeTeam}
          homeTeamOnChange={setHomeTeamId}
          awayTeamOnChange={setAwayTeamId}
        />
      </Box>
      <Box>
        <Button
          bg="blue.400"
          color="white"
          _hover={{
            bg: 'blue.500'
          }}
          isDisabled={
            !gameFormFields.homeTeam ||
            !gameFormFields.awayTeam ||
            !gameFormFields.gameDate
          }
          onClick={onSubmit}
        >
          {game ? 'Modifier' : 'Ajouter'}
        </Button>
      </Box>
    </VStack>
  )
}

export default AdminGameForm
