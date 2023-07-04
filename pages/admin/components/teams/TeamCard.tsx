import { Box, VStack, Image, IconButton } from '@chakra-ui/react'
import { Types } from 'mongoose'
import { FiXCircle } from 'react-icons/fi'
import { ITeam } from '../../../../server/db/models/teamModel'

type TeamCardProps = {
  team: ITeam
  deleteTeam: (teamId: Types.ObjectId) => void
}

function TeamCard({ team, deleteTeam }: TeamCardProps) {
  return (
    <Box
      bg="white"
      rounded="lg"
      backgroundColor="white"
      padding={8}
      width="100%"
      boxShadow="lg"
    >
      <Box>
        <IconButton
          fontSize={30}
          icon={<FiXCircle />}
          aria-label="delete team"
          bg="white"
          color="red.500"
          onClick={() => deleteTeam(team._id)}
        />
      </Box>
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
