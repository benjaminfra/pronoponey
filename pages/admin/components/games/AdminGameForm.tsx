import { useState } from 'react'
import { Input, Button } from '@chakra-ui/react'
import { IGame } from '../../../../server/db/models/gameModel'
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
  game: IGame | undefined
  week: IWeek
}

function AdminGameForm({ teams, game, week }: AdminGameFormProps) {
  const [gameFormFields, setGameFormFields] = useState<AdminGameFormFields>({
    homeTeam: game?.homeTeam.toString(),
    awayTeam: game?.awayTeam.toString(),
    gameDate: game?.date
  })

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

  return (
    <>
      <Input type="datetime-local" />
      <WeekGameSelector
        teams={teams}
        awayTeamValue={gameFormFields.awayTeam}
        homeTeamValue={gameFormFields.homeTeam}
        homeTeamOnChange={setHomeTeamId}
        awayTeamOnChange={setAwayTeamId}
      />
      <Button
        bg="blue.400"
        color="white"
        _hover={{
          bg: 'blue.500'
        }}
      >
        Ajouter
      </Button>
    </>
  )
}

export default AdminGameForm
