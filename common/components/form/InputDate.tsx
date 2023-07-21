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
  isDateTime?: boolean
}

function InputDate({
  value = new Date(),
  onChange,
  name,
  label,
  isRequired,
  isDateTime = false
}: InputDateProps) {
  const isInvalid: boolean | undefined = isRequired && !value

  return (
    <FormControl id={name} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={isDateTime ? 'datetime-local' : 'date'}
        value={
          isDateTime
            ? DateTime.fromJSDate(value)
                .setZone('Europe/Paris')
                .toFormat('yyyy-MM-dd HH:mm')
            : value.toISOString().slice(0, 10)
        }
        onChange={onChange}
      />
      {isInvalid && (
        <FormErrorMessage>Ce champ est obligatoire</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default InputDate
