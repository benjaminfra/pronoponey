import { Box, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiEdit2, FiX } from 'react-icons/fi'
import ConfirmAlertDialog from '../../../../common/components/ConfirmAlertDialog'
import { IGame, UpdateGame } from '../../../../server/db/models/gameModel'
import GameFormModal from './modal/GameFormModal'
import useAdminTeams from '../../hooks/useAdminTeams'

type AdminGameToolBarProps = {
  game: IGame
  updateGameFct: (game: UpdateGame, gameId: string) => void
  deleteGameFct: (gameId: string) => void
}

function AdminGameToolBar({
  game,
  updateGameFct,
  deleteGameFct
}: AdminGameToolBarProps) {
  const { teams } = useAdminTeams()

  const handleUpdateGame = (updateGame: UpdateGame) => {
    updateGameFct(updateGame, game._id.toString())
  }

  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose
  } = useDisclosure()

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose
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
        <GameFormModal
          game={game}
          teams={teams}
          isOpen={isUpdateOpen}
          onClose={onUpdateClose}
          submitFct={handleUpdateGame}
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
          confirmAction={() => deleteGameFct(game._id.toString())}
        />
      </Box>
    </HStack>
  )
}

export default AdminGameToolBar
