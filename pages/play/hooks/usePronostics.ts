import { Types } from 'mongoose'
import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { PronosticProps } from '../types'

export const usePronostics = (
  gameId: Types.ObjectId,
  weekNumber: number,
  homeScore: number,
  awayScore: number
) => {
  const [pronostic, setPronostic] = useState<PronosticProps>({
    gameId,
    weekNumber,
    homeScore,
    awayScore,
  })
  const { pronosticsService } = useContext(ServiceContext)

  const saveProno = (score: number, isAwayTeam?: boolean) => {
    const pronosticToSave = { ...pronostic }
    isAwayTeam
      ? (pronosticToSave.awayScore = score)
      : (pronosticToSave.homeScore = score)
    setPronostic(pronosticToSave)
    pronosticsService.savePronostic(pronosticToSave)
  }

  return { saveProno, setPronostic, pronostic }
}
