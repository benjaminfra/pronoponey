import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { FileInput } from '../../../../common/InputFile'
import { useState } from 'react'

interface AddTeamModalProps {
  onSave: (form: FormData) => void
  onClose: () => void
  onOpen: () => void
  isOpen: boolean
}

const AddTeamModal = ({
  onSave,
  onClose,
  onOpen,
  isOpen,
}: AddTeamModalProps) => {
  const [name, setName] = useState<string>()
  const [shortname, setShortname] = useState<string>()
  const [selectedFile, setSelectedFile] = useState<File>()

  const onCloseModal = () => {
    const formData = new FormData()
    if (name && shortname && selectedFile) {
      formData.append('name', name)
      formData.append('shortname', shortname)
      formData.append('file', selectedFile)
      onSave(formData)
      onClose()
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter une équipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Nom d'équipe</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl id="shortname">
                <FormLabel>Nom court</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setShortname(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl id="logo_URI">
                <FormLabel>Logo</FormLabel>
                <FileInput
                  accept=".png"
                  onChange={(e) =>
                    e.target.files &&
                    e.target.files.length &&
                    setSelectedFile(e.target.files[0])
                  }
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={onCloseModal}
            >
              Ajouter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTeamModal
