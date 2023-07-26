import { Box } from '@chakra-ui/react'
import PronosticScore from './PronosticScore'
import { IPronostic } from '../../../../server/db/models/pronosticModel'

type PronosticCardProps = {
  pronostic?: IPronostic
}

function PronosticCard({ pronostic }: PronosticCardProps) {
  return (
    <Box
      borderRadius="10px"
      backgroundColor={
        pronostic && pronostic.points && pronostic.points > 0
          ? 'green'
          : 'red.200'
      }
      padding="1em"
      marginTop="2em"
    >
      <PronosticScore
        awayScore={pronostic ? pronostic.awayScore : undefined}
        homeScore={pronostic ? pronostic.homeScore : undefined}
        points={pronostic && pronostic.points}
      />
    </Box>
  )
}

export default PronosticCard
