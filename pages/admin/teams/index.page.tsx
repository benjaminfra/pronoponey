import AddTeamModal from '../components/addTeamModal/AddTeamModal'
import { useAdminTeams } from '../hooks/useAdminTeams'

export const Page = () => {
  const { teams, createNewTeam } = useAdminTeams()
  return <AddTeamModal onSave={createNewTeam} />
}
