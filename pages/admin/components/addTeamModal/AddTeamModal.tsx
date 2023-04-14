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
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FileInput } from '../../../../common/InputFile'
import { useState } from 'react'

interface AddTeamModalProps {
  onSave: Function
}

const AddTeamModal = ({ onSave }: AddTeamModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [name, setName] = useState<string>()
  const [shortname, setShortname] = useState<string>()
  const [selectedFile, setSelectedFile] = useState<File>()

  const onCloseModal = () => {
    console.log(selectedFile)
  }

  return (
    <>
      <Button onClick={onOpen}>Ajouter une équipe</Button>

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
