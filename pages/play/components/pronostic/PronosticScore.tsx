import { Box, Center, HStack, Text } from '@chakra-ui/react'
import BigText from '../../../../common/components/BigText'
import FullyScore from '../score/FullyScore'

type PronosticScoreProps = {
  homeScore?: number
  awayScore?: number
  points: number | undefined
}

function PronosticScore({ homeScore, awayScore, points }: PronosticScoreProps) {
  return (
    <HStack>
      <Box flex={4}>
        <Text fontFamily="monospace" textAlign="center" fontSize="lg">
          Mon prono :
        </Text>
      </Box>
      <Box flex={4}>
        <Center>
          <FullyScore homeScore={homeScore} awayScore={awayScore} />
        </Center>
      </Box>
      <Box flex={4}>
        <BigText text={points || 'N/A'} />
      </Box>
    </HStack>
  )
}

export default PronosticScore
