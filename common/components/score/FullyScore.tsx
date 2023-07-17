import { Box, HStack } from '@chakra-ui/react'
import BigText from '../BigText'
import Score from './Score'

type FullScoreProps = {
  homeScore?: number
  awayScore?: number
}

function FullyScore({ homeScore, awayScore }: FullScoreProps) {
  return (
    <HStack>
      <Score score={homeScore} />
      <Box>
        <BigText text="-" />
      </Box>
      <Score score={awayScore} />
    </HStack>
  )
}

export default FullyScore
