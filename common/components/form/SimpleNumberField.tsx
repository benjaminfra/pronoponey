import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

type SimpleNumberFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label?: string
  value?: number | undefined
  isRequired?: boolean
}

function SimpleNumberField({
  onChange,
  name,
  label,
  value,
  isRequired = false
}: SimpleNumberFieldProps) {
  const isInvalid: boolean = isRequired && !value

  return (
    <FormControl id={name} isInvalid={isInvalid}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input type="number" onChange={onChange} value={value} />
      {isInvalid && (
        <FormErrorMessage>Ce champ est obligatoire</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default SimpleNumberField
