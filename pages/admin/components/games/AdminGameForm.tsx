import { useState } from 'react'
import { DateTime } from 'luxon'
import {
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box
} from '@chakra-ui/react'
import { Types } from 'mongoose'
import { IGame, NewGame } from '../../../../server/db/models/gameModel'
import { ITeam } from '../../../../server/db/models/teamModel'
import { IWeek } from '../../../../server/db/models/weekModel'
import WeekGameSelector from './WeekGameSelector'

export type AdminGameFormFields = {
  homeTeam: string | undefined
  awayTeam: string | undefined
  gameDate: Date | undefined
}

type AdminGameFormProps = {
  teams: ITeam[]
  game?: IGame
  week: IWeek
  onSubmitFct: (game: NewGame) => void
}

function AdminGameForm({ teams, game, week, onSubmitFct }: AdminGameFormProps) {
  const [gameFormFields, setGameFormFields] = useState<AdminGameFormFields>({
    homeTeam: game?.homeTeam.toString(),
    awayTeam: game?.awayTeam.toString(),
    gameDate: game?.date
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

  const setDate = (date: string) => {
    setGameFormFields((prevState) => ({
      ...prevState,
      gameDate: DateTime.fromISO(date).toJSDate()
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
      weekNumber: week.weekNumber
    })
    setHasError(false)
  }

  return (
    <Box bg="white" rounded="lg" p={6}>
      {hasError && (
        <Alert status="error" mt={5} mb={5}>
          <AlertIcon />
          <AlertTitle>Attention !</AlertTitle>
          <AlertDescription>Tous les champs sont requis</AlertDescription>
        </Alert>
      )}
      <Box mb={5} mt={5}>
        <Input
          type="datetime-local"
          onChange={(e) => setDate(e.target.value)}
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
          Ajouter
        </Button>
      </Box>
    </Box>
  )
}

export default AdminGameForm
