import Team from '../team/Team'
import { Box } from '@chakra-ui/react'
import ScoreResult from './ScoreResult'
import { ITeam } from '../../../../server/db/models/teamModel'

interface TeamScoreProps {
  team: ITeam
  score?: number
  isAwayTeam?: boolean
  isPlayable: boolean
  saveProno: Function
  pronosticScore?: number
}

const TeamScore = ({
  team,
  score,
  isAwayTeam,
  isPlayable,
  saveProno,
  pronosticScore,
}: TeamScoreProps) => {
  const scoreBox = (
    <Box width="10%">
      <ScoreResult
        score={score}
        isPlayable={isPlayable}
        saveProno={saveProno}
        isAwayTeam={isAwayTeam}
        pronosticScore={pronosticScore}
      />
    </Box>
  )

  const teamBox = (
    <Box width="30%">
      <Team
        logoUri={team.logoURI}
        name={team.name}
        shortname={team.shortname}
      />
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
