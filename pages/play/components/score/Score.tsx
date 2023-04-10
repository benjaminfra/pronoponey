import { Box, Text } from '@chakra-ui/react'
import BigText from '../../../../common/components/BigText'

interface ScoreProps {
  score?: number
}

const Score = ({ score }: ScoreProps) => {
  return (
    <Box>
      <BigText text={score || score === 0 ? score : 'N/A'} />
    </Box>
  )
}

export default Score
