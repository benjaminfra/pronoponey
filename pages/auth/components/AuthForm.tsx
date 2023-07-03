import { Box, Flex, VStack, Heading, Stack, Button } from '@chakra-ui/react'

type AuthFormProps = {
  children: React.ReactNode
  formTitle: string
  submitTitle: string
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

function AuthForm({
  children,
  formTitle,
  submitTitle,
  onSubmit,
  disabled
}: AuthFormProps) {
  return (
    <Flex minH="0vh" align="center" justify="center">
      <VStack mx="auto" spacing={8} maxW="lg" py={12} px={6} width="500px">
        <Box>
          <Heading>{formTitle}</Heading>
        </Box>
        <Box
          bg="white"
          rounded="lg"
          backgroundColor="white"
          padding={8}
          width="100%"
          boxShadow="lg"
        >
          <Stack spacing={4}>{children}</Stack>
          <Box mt="3em">
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500'
              }}
              width="100%"
              onClick={onSubmit}
              isDisabled={disabled}
            >
              {submitTitle}
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  )
}

export default AuthForm
