import { useState } from 'react'
import { VStack, Text, Box, Button } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import WeeksFormFields, { WeeksFormFieldsType } from './WeeksFormFields'
import { IWeek } from '../../../../server/db/models/weekModel'

type WeeksFormProps = {
  onSubmit: (weekNumber: number, date: Date) => void
  week?: IWeek
}

function WeeksForm({ onSubmit, week }: WeeksFormProps) {
  const [formFields, setFormFields] = useState<WeeksFormFieldsType>({
    weekNumber: week ? week.weekNumber : 1,
    date: week
      ? DateTime.fromISO(week.date.toString()).toJSDate()
      : DateTime.now().toJSDate()
  })

  const isDisable: boolean | undefined =
    !formFields.weekNumber || !formFields.date

  return (
    <VStack spacing={5} bg="white" rounded="lg">
      <Box textAlign="center">
        <Text fontSize="2xl">
          {week ? 'Modifier une journée' : 'Ajouter une journée'}
        </Text>
      </Box>
      <Box w="100%" p="10">
        <WeeksFormFields
          formFields={formFields}
          setFormFields={setFormFields}
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
          {week ? 'Modifier' : 'Ajouter'}
        </Button>
      </Box>
    </VStack>
  )
}

export default WeeksForm
