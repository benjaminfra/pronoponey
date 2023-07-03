import { Box, VStack, Image } from '@chakra-ui/react'
import { ITeam } from '../../../../server/db/models/teamModel'

type TeamCardProps = {
  team: ITeam
}

function TeamCard({ team }: TeamCardProps) {
  return (
    <Box
      bg="white"
      rounded="lg"
      backgroundColor="white"
      padding={8}
      width="100%"
      boxShadow="lg"
    >
      <VStack spacing={4}>
        <Image
          src={`/assets/${team.logoURI}`}
          boxSize="100px"
          objectFit="contain"
        />
        <Box>{`${team.name} (${team.shortname})`}</Box>
      </VStack>
    </Box>
  )
}

export default TeamCard
