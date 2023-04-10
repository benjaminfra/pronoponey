import { Box, HStack } from '@chakra-ui/react'
import BigText from '../../../../common/components/BigText'
import Score from '../score/Score'

interface FullScoreProps {
  homeScore?: number
  awayScore?: number
  isSuccess: boolean
}

const FullyScore = ({ homeScore, awayScore, isSuccess }: FullScoreProps) => {
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
