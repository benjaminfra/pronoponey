/* eslint-disable import/prefer-default-export */
import { Link, VStack, Box } from '@chakra-ui/react'

export function Page() {
  return (
    <VStack spacing={5} justify="center">
      <Box
        bg="white"
        width="100%"
        textAlign="center"
        rounded="md"
        boxShadow="md"
      >
        <Link href="/admin/teams">Equipes</Link>
      </Box>
      <Box
        bg="white"
        width="100%"
        textAlign="center"
        rounded="md"
        boxShadow="md"
      >
        <Link href="/admin/weeks">Journées</Link>
      </Box>
    </VStack>
  )
}
