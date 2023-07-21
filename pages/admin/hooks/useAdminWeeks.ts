import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IWeek, UpdateWeek } from '../../../server/db/models/weekModel'

const useAdminWeeks = () => {
  const [weeks, setWeeks] = useState<IWeek[]>([])
  const [isWeeksLoading, setIsWeeksLoading] = useState<boolean>(true)
  const toast = useToast()

  const { weeksService } = useContext(ServiceContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await weeksService.findAll()
      setWeeks(data)
    }
    fetchData()
    setIsWeeksLoading(false)
  }, [])

  const createNewWeek = async (weekNumber: number, date: Date) => {
    try {
      const savedWeek = await weeksService.createWeek(weekNumber, date)
      setWeeks([...weeks, savedWeek])
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: 'Impossible de créer la journée',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  const deleteWeek = async (id: string) => {
    try {
      await weeksService.deleteWeek(id)
      window.location.href = '/admin/weeks'
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: 'Impossible de supprimer la journée',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  const updateWeek = async (id: string, week: UpdateWeek) => {
    try {
      await weeksService.updateWeek(id, week)
      window.location.href = `/admin/weeks/${id}`
    } catch (error) {
      toast({
        title: 'Une erreur est survenue',
        description: 'Impossible de mettre à jour la journée',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return { weeks, createNewWeek, deleteWeek, updateWeek, isWeeksLoading }
}

export default useAdminWeeks
