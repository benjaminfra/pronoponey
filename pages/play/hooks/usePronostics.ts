/* eslint-disable import/prefer-default-export */
import { Types } from 'mongoose'
import { useContext, useState } from 'react'
import { ServiceContext } from '../../../renderer/provider/ServiceProvider'
import { PronosticProps, SavePronoFunction } from '../types'

const usePronostics = () => {
  const [pronostics, setPronostics] = useState<PronosticProps[]>([])
  const [isPronosticsLoading, setIsPronosticsLoading] = useState<boolean>(false)
  const { pronosticsService } = useContext(ServiceContext)

  const saveProno: SavePronoFunction = (
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
        homeScore: !isAwayTeam ? score : 0
      }
    } else if (isAwayTeam) {
      pronosticToSave.awayScore = score
    } else {
      pronosticToSave.homeScore = score
    }
    setPronostics([...pronostics, pronosticToSave])
    pronosticsService.savePronostic(pronosticToSave)
  }

  const findPronosticsByWeekNumber = async (
    weekNumber: number
  ): Promise<void> => {
    setIsPronosticsLoading(true)
    const weekPronostics = await pronosticsService.findPronosticsByWeekNumber(
      weekNumber
    )

    setPronostics(
      Array.isArray(weekPronostics)
        ? weekPronostics.map((p) => ({
            gameId: p.gameId,
            weekNumber,
            homeScore: p.homeScore,
            awayScore: p.awayScore,
            points: p.points
          }))
        : []
    )
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
