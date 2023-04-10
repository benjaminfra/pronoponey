import { Types } from 'mongoose'
import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { PronosticProps } from '../types'

export const usePronostics = () => {
  const [pronostics, setPronostics] = useState<PronosticProps[]>([])
  const [isPronosticsLoading, setIsPronosticsLoading] = useState<boolean>(false)
  const { pronosticsService } = useContext(ServiceContext)

  const saveProno = (
    gameId: Types.ObjectId,
    weekNumber: number,
    score: number,
    isAwayTeam?: boolean
  ) => {
    let pronosticToSave = pronostics.find((p) => p.gameId === gameId)
    if (!pronosticToSave) {
      pronosticToSave = {
        gameId,
        weekNumber,
        awayScore: isAwayTeam ? score : 0,
        homeScore: !isAwayTeam ? score : 0,
      }
    } else {
      if (isAwayTeam) {
        pronosticToSave.awayScore = score
      } else {
        pronosticToSave.homeScore = score
      }
    }
    setPronostics([...pronostics, pronosticToSave])
    pronosticsService.savePronostic(pronosticToSave)
  }

  const findPronosticsByWeekNumber = async (weekNumber: number) => {
    setIsPronosticsLoading(true)
    const pronostics = await pronosticsService.findPronosticsByWeekNumber(
      weekNumber
    )

    setPronostics(
      Array.isArray(pronostics)
        ? pronostics.map((p) => ({
            gameId: p.gameId,
            weekNumber,
            homeScore: p.homeScore,
            awayScore: p.awayScore,
            points: p.points,
          }))
        : []
    )
    setIsPronosticsLoading(false)
  }

  return {
    saveProno,
    pronostics,
    findPronosticsByWeekNumber,
    isPronosticsLoading,
  }
}
