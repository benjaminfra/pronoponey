/* eslint-disable import/prefer-default-export */
import {
  Box,
  HStack,
  useMediaQuery,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import WeeksTable from '../components/weeks/WeeksTable'
import useAdminWeeks from '../hooks/useAdminWeeks'
import WeeksForm from '../components/weeks/WeeksForm'
import AddWeeksModal from '../components/weeks/modal/AddWeeksModal'

export function Page() {
  const { weeks, createNewWeek, isWeeksLoading } = useAdminWeeks()
  const [isMobile] = useMediaQuery('(max-width: 1240px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {!isMobile && (
        <HStack p="5" width="100%" spacing={15} alignItems="flex-center">
          <Box width="50%" top="0">
            <WeeksTable weeks={weeks} loading={isWeeksLoading} />
          </Box>
          <Box width="50%">
            <WeeksForm onSubmit={createNewWeek} />
          </Box>
        </HStack>
      )}
      {isMobile && (
        <Box width="100%" top="0">
          <Button
            width="100%"
            textAlign="center"
            rounded="md"
            boxShadow="md"
            p={5}
            marginTop="1em"
            marginBottom="1em"
            bg="blue.400"
            color="white"
            _hover={{
              bg: 'blue.500'
            }}
            onClick={onOpen}
          >
            Ajouter une journée
          </Button>
          <AddWeeksModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={createNewWeek}
          />
          <WeeksTable weeks={weeks} loading={isWeeksLoading} />
        </Box>
      )}
    </>
  )
}
