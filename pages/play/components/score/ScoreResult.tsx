import SelectScore from './SelectScore'
import Score from './Score'

interface ScoreResultProps {
  score?: number
  isPlayable: boolean
  saveProno: Function
  isAwayTeam?: boolean
}

const ScoreResult = ({
  score,
  isPlayable,
  saveProno,
  isAwayTeam,
}: ScoreResultProps) => {
  return isPlayable ? (
    <SelectScore saveProno={saveProno} isAwayTeam={isAwayTeam} />
  ) : (
    <Score score={score} />
  )
}

export default ScoreResult
