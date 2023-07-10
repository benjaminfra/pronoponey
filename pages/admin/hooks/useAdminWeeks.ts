import { useContext, useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { IWeek } from '../../../server/db/models/weekModel'

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
      const savedWeek = await weeksService.createTeam(weekNumber, date)
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

  return { weeks, createNewWeek, isWeeksLoading }
}

export default useAdminWeeks
