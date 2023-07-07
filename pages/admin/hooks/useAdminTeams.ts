import { useContext, useState, useEffect } from 'react'
import { Types } from 'mongoose'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { ITeam } from '../../../server/db/models/teamModel'

const useAdminTeams = () => {
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

  const deleteTeam = async (id: Types.ObjectId) => {
    await teamsService.deleteTeam(id)
    setTeams(teams.filter((team) => team._id !== id))
  }

  const updateTeam = async (
    form: FormData,
    id: Types.ObjectId
  ): Promise<void> => {
    const updatedTeam = await teamsService.modifyTeam(form, id)
    const index = teams.findIndex((team) => team._id === updatedTeam._id)
    if (index !== -1) {
      teams[index] = updatedTeam
      setTeams([...teams])
    }
  }

  return { teams, createNewTeam, deleteTeam, updateTeam }
}

export default useAdminTeams
