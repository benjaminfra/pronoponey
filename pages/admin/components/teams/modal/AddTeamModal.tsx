import { useState } from 'react'
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
import FormTeamFields, { IFormTeamFields } from '../FormTeamFields'
import { ensure } from '../../../../../helpers/types.helpers'

type AddTeamModalProps = {
  onSave: (form: FormData) => void
  onClose: () => void
  isOpen: boolean
}

function AddTeamModal({ onSave, onClose, isOpen }: AddTeamModalProps) {
  const [formFields, setFormFields] = useState<IFormTeamFields>({
    name: undefined,
    shortname: undefined,
    file: undefined
  })

  const [hasError, setHasError] = useState<boolean>()

  const isDisable =
    !formFields.name ||
    formFields.name === '' ||
    !formFields.shortname ||
    formFields.shortname === '' ||
    formFields.file === undefined

  const onCloseModal = () => {
    if (isDisable) {
      setHasError(true)
      return
    }
    const formData = new FormData()
    formData.append('name', ensure(formFields.name))
    formData.append('shortname', ensure(formFields.shortname))
    formData.append('file', ensure(formFields.file))
    onSave(formData)
    onClose()
    setFormFields({ name: undefined, shortname: undefined, file: undefined })
    setHasError(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajouter une équipe</ModalHeader>
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
            <FormTeamFields fields={formFields} setFormFields={setFormFields} />
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

export default AddTeamModal
