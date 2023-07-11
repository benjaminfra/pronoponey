import { useState } from 'react'
import { VStack, Text, Box, Button } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import SimpleNumberField from '../../../../common/components/form/SimpleNumberField'
import InputDate from '../../../../common/components/form/InputDate'

type WeeksFormProps = {
  onSubmit: (weekNumber: number, date: Date) => void
}

type WeeksFormFields = {
  weekNumber: number
  date: Date
}

function WeeksForm({ onSubmit }: WeeksFormProps) {
  const [formFields, setFormFields] = useState<WeeksFormFields>({
    weekNumber: 1,
    date: DateTime.now().toJSDate()
  })

  const isDisable: boolean | undefined =
    !formFields.weekNumber || !formFields.date

  return (
    <VStack spacing={5} bg="white" rounded="lg">
      <Box textAlign="center">
        <Text fontSize="2xl">Ajouter une journée</Text>
      </Box>
      <Box w="100%" p="10">
        <SimpleNumberField
          label="Numéro de la journée"
          name="weekNumber"
          isRequired
          value={formFields.weekNumber}
          onChange={(e) =>
            setFormFields({
              ...formFields,
              weekNumber: Number.parseInt(e.target.value, 10)
            })
          }
        />
        <InputDate
          label="Date de début de la journée"
          name="date"
          onChange={(e) =>
            setFormFields({ ...formFields, date: new Date(e.target.value) })
          }
          value={formFields.date}
          isRequired
        />
      </Box>
      <Box w="100%" p="10" textAlign="right">
        <Button
          bg="blue.400"
          color="white"
          _hover={{
            bg: 'blue.500'
          }}
          onClick={() => onSubmit(formFields.weekNumber, formFields.date)}
          disabled={isDisable}
        >
          Ajouter
        </Button>
      </Box>
    </VStack>
  )
}

export default WeeksForm
