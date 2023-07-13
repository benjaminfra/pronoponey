/* eslint-disable import/prefer-default-export */
import { Heading } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { ITeam } from '../../../../server/db/models/teamModel'
import { IWeek } from '../../../../server/db/models/weekModel'
import WeekGameSelector from '../../components/games/WeekGameSelector'
import useAdminWeekGames from '../../hooks/useAdminWeekGames'
import AdminGameForm from '../../components/games/AdminGameForm'

type PageProps = {
  week: IWeek
  teams: ITeam[]
}

export function Page({ week, teams }: PageProps) {
  const { weekGames, handleCreateGame, isWeekGamesLoading } = useAdminWeekGames(
    week.weekNumber
  )

  return (
    <>
      <Heading as="h1">{`Journée n°${
        week.weekNumber
      } à la date du ${DateTime.fromISO(
        week.date.toString()
      ).toLocaleString()}`}</Heading>
      <AdminGameForm teams={teams} week={week} onSubmitFct={handleCreateGame} />
    </>
  )
}
