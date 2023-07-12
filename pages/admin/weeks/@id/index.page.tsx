/* eslint-disable import/prefer-default-export */
import { Heading } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { ITeam } from '../../../../server/db/models/teamModel'
import { IWeek } from '../../../../server/db/models/weekModel'
import WeekGameSelector from '../../components/games/WeekGameSelector'
import useAdminWeekGames from '../../hooks/useAdminWeekGames'

type PageProps = {
  week: IWeek
  teams: ITeam[]
}

export function Page({ week, teams }: PageProps) {
  const { weekGames, isWeekGamesLoading } = useAdminWeekGames(week.weekNumber)

  return (
    <>
      <Heading as="h1">{`Journée n°${
        week.weekNumber
      } à la date du ${DateTime.fromISO(
        week.date.toString()
      ).toLocaleString()}`}</Heading>
      <WeekGameSelector week={week} teams={teams} />
    </>
  )
}
