import { Box } from '@chakra-ui/react'
import BigText from '../../../../common/components/BigText'

type ScoreProps = {
  score?: number
}

function Score({ score }: ScoreProps) {
  return (
    <Box>
      <BigText text={score || score === 0 ? score : 'N/A'} />
    </Box>
  )
}

export default Score
