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
import { Types } from 'mongoose'
import FormTeamFields, { IFormTeamFields } from '../FormTeamFields'
import { ensure } from '../../../../../helpers/types.helpers'
import { ITeam } from '../../../../../server/db/models/teamModel'

type UpdateTeamModalProps = {
  onSave: (form: FormData, teamId: Types.ObjectId) => void
  onClose: () => void
  isOpen: boolean
  team: ITeam
}

function UpdateTeamModal({
  onSave,
  onClose,
  isOpen,
  team
}: UpdateTeamModalProps) {
  const [formFields, setFormFields] = useState<IFormTeamFields>({
    name: team.name,
    shortname: team.shortname,
    file: undefined
  })

  const [hasError, setHasError] = useState<boolean>()

  const isDisable =
    !formFields.name ||
    formFields.name === '' ||
    !formFields.shortname ||
    formFields.shortname === ''

  const onCloseModal = () => {
    if (isDisable) {
      setHasError(true)
      return
    }
    const formData = new FormData()
    formData.append('name', ensure(formFields.name))
    formData.append('shortname', ensure(formFields.shortname))
    if (formFields.file) {
      formData.append('file', formFields.file)
    }
    onSave(formData, team._id)
    onClose()
    setFormFields({ name: undefined, shortname: undefined, file: undefined })
    setHasError(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier une équipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {hasError && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Attention !</AlertTitle>
                <AlertDescription>
                  Le nom et le nom court est obligatoire
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
            Modifier
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UpdateTeamModal
