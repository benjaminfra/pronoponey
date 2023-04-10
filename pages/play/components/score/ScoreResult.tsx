import SelectScore from './SelectScore'
import Score from './Score'

interface ScoreResultProps {
  score?: number
  pronosticScore?: number
  isPlayable: boolean
  saveProno: (value: number) => void
}

const ScoreResult = ({
  score,
  isPlayable,
  saveProno,
  pronosticScore,
}: ScoreResultProps) => {
  return isPlayable ? (
    <SelectScore saveProno={saveProno} pronosticScore={pronosticScore} />
  ) : (
    <Score score={score} />
  )
}

export default ScoreResult
