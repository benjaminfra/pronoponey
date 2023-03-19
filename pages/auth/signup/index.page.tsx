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
  FormHelperText,
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { EMAIL_REGEX } from '../../../helpers/constants'
import { AuthContext } from '../../../renderer/provider/AuthProvider'

export const Page = () => {
  const [email, setEmail] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const { loggedUser, signUp } = useContext(AuthContext)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  const showPassword = () => setShow(!show)

  const isEmailValid: boolean = email === '' || !!email.match(EMAIL_REGEX)
  const isPasswordValid: boolean = password === '' || password.length > 7
  const isUsernameValid: boolean = username === '' || username.length > 0

  const onSubmit = (_e: React.MouseEvent<HTMLButtonElement>) => {
    signUp({
      email,
      password,
      username,
    })
  }

  return (
    <Flex minH={{ base: '0vh', md: '100vh' }} align="center" justify="center">
      <VStack mx="auto" spacing={8} maxW={'lg'} py={12} px={6} width="500px">
        <Box>
          <Heading>Rejoins le box</Heading>
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
            <FormControl isInvalid={!isEmailValid} id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={onChangeEmail}
                placeholder="Email"
              />
              <FormErrorMessage>L'email doit être valide</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!isUsernameValid} id="username" isRequired>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <Input
                onChange={onChangeUsername}
                placeholder="Nom d'utilisateur"
              />
              <FormErrorMessage>
                Le nom d'utilisateur est obligatoire
              </FormErrorMessage>
              <FormHelperText fontSize={12} opacity="66%">
                C'est le nom que tout le monde verra, mais tu peux le changer
                quand tu veux
              </FormHelperText>
            </FormControl>
            <FormControl isInvalid={!isPasswordValid} id="password" isRequired>
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
              <FormErrorMessage>
                Le mot de passe doit contenir au moins 8 caractères
              </FormErrorMessage>
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
              onClick={onSubmit}
            >
              S'inscrire
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  )
}
