import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

interface EmailFormInputProps {
  username: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
}

const UsernameFormInput = ({
  username,
  onChange,
  isValid,
}: EmailFormInputProps) => {
  return (
    <FormControl isInvalid={isValid === false} id="username" isRequired>
      <FormLabel>Nom d'utilisateur</FormLabel>
      <Input
        onChange={onChange}
        placeholder="Nom d'utilisateur"
        value={username}
      />
      <FormErrorMessage>Le nom d'utilisateur est obligatoire</FormErrorMessage>
      <FormHelperText fontSize={12} opacity="66%">
        C'est le nom que tout le monde verra, mais tu peux le changer quand tu
        veux
      </FormHelperText>
    </FormControl>
  )
}

export default UsernameFormInput
