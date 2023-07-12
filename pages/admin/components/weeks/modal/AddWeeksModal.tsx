import { useState } from 'react'
import { DateTime } from 'luxon'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import WeeksFormFields, { WeeksFormFieldsType } from '../WeeksFormFields'

type AddWeeksModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (weekNumber: number, date: Date) => void
}

function AddWeeksModal({ isOpen, onClose, onSubmit }: AddWeeksModalProps) {
  const [hasError, setHasError] = useState<boolean>()

  const [formFields, setFormFields] = useState<WeeksFormFieldsType>({
    weekNumber: 1,
    date: DateTime.now().toJSDate()
  })

  const isDisable = !formFields.weekNumber || !formFields.date

  const onCloseModal = () => {
    if (isDisable) {
      setHasError(true)
      return
    }
    onSubmit(formFields.weekNumber, formFields.date)
    onClose()
    setHasError(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajouter une journée</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {hasError && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Attention !</AlertTitle>
                <AlertDescription>
                  Tous les champs sont obligatoires
                </AlertDescription>
              </Alert>
            )}
            <WeeksFormFields
              formFields={formFields}
              setFormFields={setFormFields}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500'
            }}
            onClick={onCloseModal}
            disabled={isDisable}
          >
            Ajouter
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddWeeksModal
