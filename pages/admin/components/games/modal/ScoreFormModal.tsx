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
  AlertDescription,
  HStack,
  Box
} from '@chakra-ui/react'
import SimpleNumberField from '../../../../../common/components/form/SimpleNumberField'
import BigText from '../../../../../common/components/BigText'
import { ensure } from '../../../../../helpers/types.helpers'

type ScoreFormModalProps = {
  onSave: (homeScore: number, awayScore: number) => void
  onClose: () => void
  isOpen: boolean
}

type ScoreFormFields = {
  homeScore: number | undefined
  awayScore: number | undefined
}

function ScoreFormModal({ onSave, onClose, isOpen }: ScoreFormModalProps) {
  const [formFields, setFormFields] = useState<ScoreFormFields>({
    homeScore: 0,
    awayScore: 0
  })

  const isDisable =
    formFields.homeScore === undefined || formFields.awayScore === undefined

  const [hasError, setHasError] = useState<boolean>()

  const onCloseModal = () => {
    if (isDisable) {
      setHasError(true)
      return
    }
    onSave(ensure(formFields.homeScore), ensure(formFields.awayScore))
    onClose()
    setHasError(false)
    setFormFields({ homeScore: 0, awayScore: 0 })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier le score</ModalHeader>
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
            <HStack>
              <Box flex={2}>
                <SimpleNumberField
                  name="homeScore"
                  value={formFields.homeScore}
                  onChange={(e) =>
                    setFormFields({
                      ...formFields,
                      homeScore: e.target.value
                        ? Number.parseInt(e.target.value, 10)
                        : undefined
                    })
                  }
                />
              </Box>
              <Box flex={1}>
                <BigText text="-" />
              </Box>
              <Box flex={2}>
                <SimpleNumberField
                  name="awayScore"
                  value={formFields.awayScore}
                  onChange={(e) =>
                    setFormFields({
                      ...formFields,
                      awayScore: e.target.value
                        ? Number.parseInt(e.target.value, 10)
                        : undefined
                    })
                  }
                />
              </Box>
            </HStack>
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

export default ScoreFormModal
