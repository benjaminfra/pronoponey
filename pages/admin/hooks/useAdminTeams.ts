import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { Types } from 'mongoose'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { ITeam } from '../../../server/db/models/teamModel'

const useAdminTeams = () => {
  const [teams, setTeams] = useState<ITeam[]>([])
  const toast = useToast()

  const { teamsService } = useContext(ServiceContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await teamsService.findAll()
      setTeams(data)
    }
    fetchData()
  }, [])

  const createNewTeam = async (form: FormData) => {
    try {
      const savedTeam = await teamsService.createTeam(form)
      setTeams([...teams, savedTeam])
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: "Impossible de créer l'équipe",
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  const deleteTeam = async (id: Types.ObjectId) => {
    try {
      await teamsService.deleteTeam(id)
      setTeams(teams.filter((team) => team._id !== id))
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: "Impossible de supprimer l'équipe",
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  const updateTeam = async (
    form: FormData,
    id: Types.ObjectId
  ): Promise<void> => {
    try {
      const updatedTeam = await teamsService.modifyTeam(form, id)
      const index = teams.findIndex((team) => team._id === updatedTeam._id)
      if (index !== -1) {
        teams[index] = updatedTeam
        setTeams([...teams])
      }
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: "Impossible de mettre à jour l'équipe",
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return { teams, createNewTeam, deleteTeam, updateTeam }
}

export default useAdminTeams
