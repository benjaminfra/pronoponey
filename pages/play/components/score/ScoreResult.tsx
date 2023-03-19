import SelectScore from './SelectScore'
import Score from './Score'

interface ScoreResultProps {
  score?: number
  isPlayable: boolean
}

const ScoreResult = ({ score, isPlayable }: ScoreResultProps) => {
  return isPlayable ? <SelectScore /> : <Score score={score} />
}

export default ScoreResult
