import { useContext, useState, useEffect } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { ITeam } from '../../../server/db/models/teamModel'

export const useAdminTeams = () => {
  const [teams, setTeams] = useState<ITeam[]>([])

  const { teamsService } = useContext(ServiceContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await teamsService.findAll()
      setTeams(data)
    }
    fetchData()
  }, [])

  const createNewTeam = async (form: FormData) => {
    const savedTeam = await teamsService.createTeam(form)
    setTeams([...teams, savedTeam])
  }

  return { teams, createNewTeam }
}
