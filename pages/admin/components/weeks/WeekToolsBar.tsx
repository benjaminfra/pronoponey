import { Box, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiEdit2, FiX } from 'react-icons/fi'
import { IWeek } from '../../../../server/db/models/weekModel'
import useAdminWeeks from '../../hooks/useAdminWeeks'
import ConfirmAlertDialog from '../../../../common/components/ConfirmAlertDialog'
import AddWeeksModal from './modal/AddWeeksModal'

type WeekToolBarProps = {
  week: IWeek
}

function WeekToolBar({ week }: WeekToolBarProps) {
  const { updateWeek, deleteWeek } = useAdminWeeks()

  const onUpdateModalFct = (weekNumber: number, date: Date) => {
    updateWeek(week._id.toString(), { weekNumber, date })
  }

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose
  } = useDisclosure()

  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose
  } = useDisclosure()

  return (
    <HStack bg="white" rounded="lg" p={1}>
      <Box>
        <IconButton
          aria-label="Modifier"
          icon={<FiEdit2 />}
          bg="white"
          onClick={onUpdateOpen}
        />
        <AddWeeksModal
          isOpen={isUpdateOpen}
          onClose={onUpdateClose}
          week={week}
          onSubmit={onUpdateModalFct}
        />
      </Box>
      <Box>
        <IconButton
          aria-label="Supprimer"
          icon={<FiX />}
          bg="red.500"
          color="white"
          onClick={onDeleteOpen}
        />
        <ConfirmAlertDialog
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          confirmAction={() => deleteWeek(week._id.toString())}
        />
      </Box>
    </HStack>
  )
}

export default WeekToolBar
