import { VStack, Box, Image, Text } from '@chakra-ui/react'

type TeamProps = {
  name: string
  logoUri: string
  shortname: string
}

function Team({ name, logoUri, shortname }: TeamProps) {
  return (
    <VStack>
      <Box>
        <Image src={logoUri} boxSize="100px" objectFit="contain" />
      </Box>
      <Box>
        <Text fontSize="1md" fontFamily="monospace" fontWeight="bold">
          {name}
        </Text>
      </Box>
      {shortname}
    </VStack>
  )
}

export default Team
