/* eslint-disable import/prefer-default-export */
import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import {
  IPronostic,
  NewPronostic
} from '../../../server/db/models/pronosticModel'

const usePronostics = () => {
  const [pronostics, setPronostics] = useState<IPronostic[]>([])
  const [isPronosticsLoading, setIsPronosticsLoading] = useState<boolean>(false)
  const { pronosticsService } = useContext(ServiceContext)

  const saveProno = async (pronostic: NewPronostic) => {
    const savedPronostic = await pronosticsService.savePronostic(pronostic)
    setPronostics([...pronostics, savedPronostic])
  }

  const findPronosticsByWeekNumber = async (
    weekNumber: number
  ): Promise<void> => {
    setIsPronosticsLoading(true)
    const weekPronostics = await pronosticsService.findPronosticsByWeekNumber(
      weekNumber
    )

    setPronostics(weekPronostics)
    setIsPronosticsLoading(false)
  }

  return {
    saveProno,
    pronostics,
    findPronosticsByWeekNumber,
    isPronosticsLoading
  }
}

export default usePronostics
