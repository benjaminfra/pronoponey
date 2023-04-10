import { PronosticProps } from '../../types'
import { Box } from '@chakra-ui/react'
import PronosticScore from './PronosticScore'

interface PronosticCardProps {
  pronostic?: PronosticProps
}

const PronosticCard = ({ pronostic }: PronosticCardProps) => {
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
