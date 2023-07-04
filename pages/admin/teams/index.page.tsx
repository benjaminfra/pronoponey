/* eslint-disable import/prefer-default-export */
import { FiPlus } from 'react-icons/fi'
import {
  Wrap,
  WrapItem,
  Box,
  useDisclosure,
  Button,
  Icon,
  VStack
} from '@chakra-ui/react'
import AddTeamModal from '../components/teams/AddTeamModal'
import useAdminTeams from '../hooks/useAdminTeams'
import TeamCard from '../components/teams/TeamCard'

export function Page() {
  const { teams, createNewTeam, deleteTeam } = useAdminTeams()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Wrap spacing={10} justify="center">
        <WrapItem width="300px">
          <Box
            bg="white"
            rounded="lg"
            backgroundColor="white"
            width="100%"
            boxShadow="lg"
            height="100%"
          >
            <Button w="100%" h="100%" onClick={onOpen} backgroundColor="white">
              <VStack spacing={2}>
                <Box>
                  <Icon as={FiPlus} w={10} h={10} />
                </Box>
                <Box>Ajouter une équipe</Box>
              </VStack>
            </Button>
            <AddTeamModal
              onSave={createNewTeam}
              onClose={onClose}
              isOpen={isOpen}
            />
          </Box>
        </WrapItem>
        {teams.map((team) => (
          <WrapItem key={team._id.toString()} width="300px">
            <TeamCard team={team} deleteTeam={deleteTeam} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  )
}
