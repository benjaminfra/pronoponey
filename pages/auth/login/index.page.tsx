import {
  Box,
  Flex,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  InputRightElement,
  Button,
  InputGroup,
} from '@chakra-ui/react'
import { useState } from 'react'

export const Page = () => {
  const [email, setEmail] = useState<string>()
  const [show, setShow] = useState<boolean>(false)
  const [password, setPassword] = useState<string>()

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const showPassword = () => setShow(!show)

  const isEmailError = email === ''
  const isPasswordError = password === ''
  return (
    <Flex minH={{ base: '0vh', md: '100vh' }} align="center" justify="center">
      <VStack mx="auto" spacing={8} maxW={'lg'} py={12} px={6} width="500px">
        <Box>
          <Heading>Connecte-toi</Heading>
        </Box>
        <Box
          bg="white"
          rounded={'lg'}
          backgroundColor="white"
          padding={8}
          width="100%"
          boxShadow={'lg'}
        >
          <Stack spacing={4}>
            <FormControl isInvalid={isEmailError} id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={onChangeEmail}
                placeholder="Email"
              />
              <FormErrorMessage>L'email doit être valide</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={isPasswordError} id="password" isRequired>
              <FormLabel>Mot de passe</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  onChange={onChangePassword}
                  placeholder="Mot de passe"
                />
                <InputRightElement width="4.5rem" mr="1em">
                  <Button h="1.75rem" size="sm" onClick={showPassword}>
                    {show ? 'Cacher' : 'Afficher'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>L'email doit être valide</FormErrorMessage>
            </FormControl>
          </Stack>
          <Box mt="3em">
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              width="100%"
            >
              Se connecter
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  )
}
