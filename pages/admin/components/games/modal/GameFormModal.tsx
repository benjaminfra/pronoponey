import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import AdminGameForm from '../AdminGameForm'
import {
  IGame,
  NewGame,
  UpdateGame
} from '../../../../../server/db/models/gameModel'
import { ITeam } from '../../../../../server/db/models/teamModel'
import { ensure } from '../../../../../helpers/types.helpers'

type GameFormModalProps = {
  teams: ITeam[]
  onClose: () => void
  isOpen: boolean
  submitFct: (game: NewGame | UpdateGame) => void
} & (
  | {
      game: IGame
      weekNumber?: number
    }
  | {
      weekNumber: number
      game?: IGame
    }
)

function GameFormModal({
  teams,
  onClose,
  isOpen,
  submitFct,
  game,
  weekNumber
}: GameFormModalProps) {
  const onCloseModal = (gameFormFields: UpdateGame | NewGame) => {
    submitFct(gameFormFields)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {game ? 'Modifier un match' : 'Créer un match'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AdminGameForm
            onSubmitFct={onCloseModal}
            teams={teams}
            {...(game ? { game } : { weekNumber: ensure(weekNumber) })}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GameFormModal
