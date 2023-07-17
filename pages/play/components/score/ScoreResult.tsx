import SelectScore from './SelectScore'
import Score from '../../../../common/components/score/Score'

type ScoreResultProps = {
  score?: number
  pronosticScore?: number
  isPlayable: boolean
  saveProno: (value: number) => void
}

function ScoreResult({
  score,
  isPlayable,
  saveProno,
  pronosticScore
}: ScoreResultProps) {
  return isPlayable ? (
    <SelectScore saveProno={saveProno} pronosticScore={pronosticScore} />
  ) : (
    <Score score={score} />
  )
}

export default ScoreResult
