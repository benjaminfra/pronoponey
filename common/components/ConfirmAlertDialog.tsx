import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'

type ConfirmAlertDialogProps = {
  onClose: () => void
  isOpen: boolean
  confirmAction: () => void
}

function ConfirmAlertDialog({
  onClose,
  isOpen,
  confirmAction
}: ConfirmAlertDialogProps) {
  const cancelRef: React.RefObject<HTMLButtonElement> = React.useRef(null)

  const saveAndClose = () => {
    confirmAction()
    onClose()
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Confirmation
          </AlertDialogHeader>

          <AlertDialogBody>
            Es tu sûr de vouloir supprimer ça :O ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Annuler
            </Button>
            <Button colorScheme="red" onClick={saveAndClose} ml={3}>
              Supprimer
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default ConfirmAlertDialog
