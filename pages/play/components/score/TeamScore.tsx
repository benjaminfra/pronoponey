import { Box } from '@chakra-ui/react'
import TeamDisplay from '../../../../common/components/team/TeamDisplay'
import ScoreResult from './ScoreResult'
import { ITeam } from '../../../../server/db/models/teamModel'

type TeamScoreProps = {
  team: ITeam
  score?: number
  isAwayTeam?: boolean
  isPlayable: boolean
  saveProno: (value: number) => void
  pronosticScore?: number
}

function TeamScore({
  team,
  score,
  isAwayTeam,
  isPlayable,
  saveProno,
  pronosticScore
}: TeamScoreProps) {
  const scoreBox = (
    <Box width="10%">
      <ScoreResult
        score={score}
        isPlayable={isPlayable}
        saveProno={saveProno}
        pronosticScore={pronosticScore}
      />
    </Box>
  )

  const teamBox = (
    <Box width="30%">
      <TeamDisplay team={team} displayImage />
    </Box>
  )
  return (
    <>
      {isAwayTeam ? scoreBox : teamBox}
      {isAwayTeam ? teamBox : scoreBox}
    </>
  )
}

export default TeamScore
