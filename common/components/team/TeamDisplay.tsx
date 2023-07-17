import { VStack, Box, Image, Text } from '@chakra-ui/react'
import { ITeam } from '../../../server/db/models/teamModel'

type TeamProps = {
  team: ITeam
  displayImage?: boolean
}

function TeamDisplay({ team, displayImage = false }: TeamProps) {
  return (
    <VStack>
      {displayImage && (
        <Box>
          <Image
            src={`/assets/${team.logoURI}`}
            boxSize="100px"
            objectFit="contain"
          />
        </Box>
      )}
      <Box>
        <Text fontSize="1md" fontFamily="monospace" fontWeight="bold">
          {team.name}
        </Text>
      </Box>
      {team.shortname}
    </VStack>
  )
}

export default TeamDisplay
