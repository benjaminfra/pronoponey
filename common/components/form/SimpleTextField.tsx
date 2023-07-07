import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

type SimpleTextFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label: string
  value: string | undefined
  isRequired?: boolean
}

function SimpleTextField({
  onChange,
  name,
  label,
  value,
  isRequired = false
}: SimpleTextFieldProps) {
  const isInvalid: boolean = isRequired && value === ''

  return (
    <FormControl id={name} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input type="text" onChange={onChange} value={value} />
      {isInvalid && (
        <FormErrorMessage>Ce champ est obligatoire</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default SimpleTextField
