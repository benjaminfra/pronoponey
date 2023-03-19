import { Box, Text } from '@chakra-ui/react'

interface ScoreProps {
  score?: number
}

const Score = ({ score }: ScoreProps) => {
  return (
    <Box>
      <Text
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        textAlign="center"
      >
        {score || score === 0 ? score : 'N/A'}
      </Text>
    </Box>
  )
}

export default Score
