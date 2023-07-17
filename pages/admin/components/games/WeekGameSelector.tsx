import { Box, HStack } from '@chakra-ui/react'
import { ITeam } from '../../../../server/db/models/teamModel'
import TeamSelect from '../teams/TeamSelect'

type WeekGameSelectorProps = {
  teams: ITeam[]
  homeTeamValue: string | undefined
  awayTeamValue: string | undefined
  homeTeamOnChange: (teamId: string) => void
  awayTeamOnChange: (teamId: string) => void
}

function WeekGameSelector({
  teams,
  homeTeamValue,
  awayTeamValue,
  homeTeamOnChange,
  awayTeamOnChange
}: WeekGameSelectorProps) {
  return (
    <HStack bg="white" rounded="md">
      <Box flex={1}>
        <TeamSelect
          placeholder="Equipe à domicile"
          teams={teams}
          setSelectedOptions={homeTeamOnChange}
          value={homeTeamValue}
        />
      </Box>
      <Box flex={1}>
        <TeamSelect
          placeholder="Equipe à l'extérieur"
          teams={teams}
          setSelectedOptions={awayTeamOnChange}
          value={awayTeamValue}
        />
      </Box>
    </HStack>
  )
}

export default WeekGameSelector
