import {
  Box,
  VStack,
  Image,
  IconButton,
  useDisclosure,
  Grid
} from '@chakra-ui/react'
import { Types } from 'mongoose'
import { FiXCircle, FiEdit2 } from 'react-icons/fi'
import { ITeam } from '../../../../server/db/models/teamModel'
import UpdateTeamModal from './modal/UpdateTeamModal'
import ConfirmAlertDialog from '../../../../common/components/ConfirmAlertDialog'

type TeamCardProps = {
  team: ITeam
  deleteTeam: (teamId: Types.ObjectId) => void
  updateTeam: (form: FormData, teamId: Types.ObjectId) => void
}

function TeamCard({ team, deleteTeam, updateTeam }: TeamCardProps) {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onCloseModal
  } = useDisclosure()
  const {
    isOpen: isDialogOpen,
    onOpen: onOpenDialog,
    onClose: onCloseDialog
  } = useDisclosure()

  return (
    <Box
      bg="white"
      rounded="lg"
      backgroundColor="white"
      padding={8}
      width="100%"
      boxShadow="lg"
    >
      <Grid templateColumns="1fr auto" gap={4} alignItems="center">
        <Box>
          <IconButton
            fontSize={30}
            icon={<FiEdit2 />}
            aria-label="edit team"
            bg="white"
            onClick={onModalOpen}
          />
          <UpdateTeamModal
            onSave={updateTeam}
            onClose={onCloseModal}
            isOpen={isModalOpen}
            team={team}
          />
        </Box>
        <Box justifySelf="flex-end">
          <IconButton
            fontSize={30}
            icon={<FiXCircle />}
            aria-label="delete team"
            bg="white"
            color="red.500"
            onClick={onOpenDialog}
          />
          <ConfirmAlertDialog
            isOpen={isDialogOpen}
            onClose={onCloseDialog}
            confirmAction={() => deleteTeam(team._id)}
          />
        </Box>
      </Grid>
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
