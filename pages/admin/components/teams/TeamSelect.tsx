import { Select } from '@chakra-ui/react'
import { ITeam } from '../../../../server/db/models/teamModel'

type TeamSelectProps = {
  teams: ITeam[]
  placeholder: string
  setSelectedOptions: (teamId: string) => void
  value?: string
}

function TeamSelect({
  teams,
  placeholder,
  setSelectedOptions,
  value
}: TeamSelectProps) {
  return (
    <Select
      placeholder={placeholder}
      onChange={(e) => setSelectedOptions(e.target.value)}
      value={value}
    >
      {teams.map((team) => (
        <option key={team._id.toString()} value={team._id.toString()}>
          {team.name}
        </option>
      ))}
    </Select>
  )
}

export default TeamSelect
