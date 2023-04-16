import { Wrap, WrapItem, Box, useDisclosure, Button } from '@chakra-ui/react'
import AddTeamModal from '../components/addTeamModal/AddTeamModal'
import { useAdminTeams } from '../hooks/useAdminTeams'
import TeamCard from '../components/teamCard/TeamCard'

export const Page = () => {
  const { teams, createNewTeam } = useAdminTeams()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Wrap spacing={10} justify="center">
        <WrapItem width="300px">
          <Box
            bg="white"
            rounded={'lg'}
            backgroundColor="white"
            padding={8}
            width="100%"
            boxShadow={'lg'}
            height="100%"
          >
            <Button w="100%" h="100%" onClick={onOpen}>
              Ajouter une équipe
            </Button>
            <AddTeamModal
              onSave={createNewTeam}
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
            />
          </Box>
        </WrapItem>
        {teams.map((team) => (
          <WrapItem key={team._id.toString()} width="300px">
            <TeamCard team={team} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  )
}
