import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'

interface SimpleTextField {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label: string
  value: string | undefined
  isRequired?: boolean
}

const SimpleTextField = ({
  onChange,
  name,
  label,
  value,
  isRequired = false,
}: SimpleTextField) => {
  const isInvalid: boolean = isRequired && value === ''

  return (
    <FormControl id={name} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input type="text" onChange={onChange}></Input>
      {isInvalid && (
        <FormErrorMessage>Ce champ est obligatoire</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default SimpleTextField
