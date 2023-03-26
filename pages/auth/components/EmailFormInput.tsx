import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

interface EmailFormInputProps {
  email: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
}

const EmailFormInput = ({ email, onChange, isValid }: EmailFormInputProps) => {
  return (
    <FormControl isInvalid={isValid === false} id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        onChange={onChange}
        placeholder="Email"
        value={email}
      />
      <FormErrorMessage>L'email doit être valide</FormErrorMessage>
    </FormControl>
  )
}

export default EmailFormInput
