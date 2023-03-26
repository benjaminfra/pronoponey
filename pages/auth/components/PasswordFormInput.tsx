import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

interface PasswordFormInputProps {
  password: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
}

const PasswordFormInput = ({
  password,
  onChange,
  isValid,
}: PasswordFormInputProps) => {
  const [show, setShow] = useState<boolean>(false)

  const showPassword = () => setShow(!show)

  return (
    <FormControl isInvalid={isValid === false} id="password" isRequired>
      <FormLabel>Mot de passe</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          onChange={onChange}
          placeholder="Mot de passe"
          value={password}
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
  )
}

export default PasswordFormInput
