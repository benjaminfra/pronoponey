import { Box, Center, HStack, Text } from '@chakra-ui/react'
import BigText from '../../../../common/components/BigText'
import FullyScore from '../score/FullyScore'

interface PronosticScoreProps {
  homeScore?: number
  awayScore?: number
  points: number | undefined
}

const PronosticScore = ({
  homeScore,
  awayScore,
  points,
}: PronosticScoreProps) => {
  return (
    <>
      <HStack>
        <Box flex={4}>
          <Text fontFamily="monospace" textAlign="center" fontSize="lg">
            Mon prono :
          </Text>
        </Box>
        <Box flex={4}>
          <Center>
            <FullyScore
              homeScore={homeScore}
              awayScore={awayScore}
              isSuccess={points ? points > 0 : false}
            />
          </Center>
        </Box>
        <Box flex={4}>
          <BigText text={points ? points : 'N/A'} />
        </Box>
      </HStack>
    </>
  )
}

export default PronosticScore
