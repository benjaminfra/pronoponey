import InputDate from '../../../../common/components/form/InputDate'
import SimpleNumberField from '../../../../common/components/form/SimpleNumberField'

type IWeeksFormFields = {
  formFields: WeeksFormFieldsType
  setFormFields: (value: WeeksFormFieldsType) => void
}

export type WeeksFormFieldsType = {
  weekNumber: number
  date: Date
}

function WeeksFormFields({ formFields, setFormFields }: IWeeksFormFields) {
  return (
    <>
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
    </>
  )
}

export default WeeksFormFields
