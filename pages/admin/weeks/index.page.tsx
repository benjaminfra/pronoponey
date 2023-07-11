/* eslint-disable import/prefer-default-export */
import { Box, HStack, useMediaQuery } from '@chakra-ui/react'
import WeeksTable from '../components/weeks/WeeksTable'
import useAdminWeeks from '../hooks/useAdminWeeks'
import WeeksForm from '../components/weeks/WeeksForm'

export function Page() {
  const { weeks, createNewWeek, isWeeksLoading } = useAdminWeeks()
  const [isMobile] = useMediaQuery('(max-width: 1240px)')

  return (
    <>
      {!isMobile && (
        <HStack p="5" width="100%" spacing={15} alignItems="flex-center">
          <Box width="50%" top="0">
            <WeeksTable weeks={weeks} />
          </Box>
          <Box width="50%">
            <WeeksForm onSubmit={createNewWeek} />
          </Box>
        </HStack>
      )}
      {isMobile && (
        <Box width="100%" top="0">
          <WeeksTable weeks={weeks} />
        </Box>
      )}
    </>
  )
}
