import { FormControl, FormLabel } from '@chakra-ui/react'
import SimpleTextField from '../../../../common/components/form/SimpleTextField'
import FileInput from '../../../../common/components/form/InputFile'

type FormTeamFieldsProps = {
  fields: IFormTeamFields
  setFormFields: (value: IFormTeamFields) => void
}

export type IFormTeamFields = {
  name: string | undefined
  shortname: string | undefined
  file: File | undefined
}

function FormTeamFields({ fields, setFormFields }: FormTeamFieldsProps) {
  return (
    <>
      <SimpleTextField
        name="name"
        value={fields.name}
        label="Nom d'équipe"
        onChange={(e) => setFormFields({ ...fields, name: e.target.value })}
        isRequired
      />
      <SimpleTextField
        name="shortname"
        value={fields.shortname}
        label="Nom court"
        onChange={(e) =>
          setFormFields({ ...fields, shortname: e.target.value })
        }
        isRequired
      />
      <FormControl id="logo_URI">
        <FormLabel>Logo</FormLabel>
        <FileInput
          accept=".png"
          onChange={(e) =>
            e.target.files &&
            e.target.files.length &&
            setFormFields({ ...fields, file: e.target.files[0] })
          }
        />
      </FormControl>
    </>
  )
}

export default FormTeamFields
