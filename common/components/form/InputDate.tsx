import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'
import { DateTime } from 'luxon'

type InputDateProps = {
  value?: Date | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  label: string
  isRequired?: boolean
}

function InputDate({
  value = new Date(),
  onChange,
  name,
  label,
  isRequired
}: InputDateProps) {
  const isInvalid: boolean | undefined = isRequired && !value

  return (
    <FormControl id={name} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        type="date"
        value={DateTime.fromJSDate(value).toISODate()?.toString()}
        onChange={onChange}
      />
      {isInvalid && (
        <FormErrorMessage>Ce champ est obligatoire</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default InputDate
