import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react'
import SimpleTextField from '../../../../common/components/form/SimpleTextField'
import FileInput from '../../../../common/components/form/InputFile'

interface CreateTeamFieldsProps {
  fields: ICreateTeamFields
  setFormFields: Function
}

export interface ICreateTeamFields {
  name: string | undefined
  shortname: string | undefined
  file: File | undefined
}

const CreateTeamFields = ({ fields, setFormFields }: CreateTeamFieldsProps) => {
  return (
    <>
      <SimpleTextField
        name="name"
        value={fields.name}
        label="Nom d'équipe"
        onChange={(e) => setFormFields({ ...fields, name: e.target.value })}
        isRequired={true}
      />
      <SimpleTextField
        name="shortname"
        value={fields.shortname}
        label="Nom court"
        onChange={(e) =>
          setFormFields({ ...fields, shortname: e.target.value })
        }
        isRequired={true}
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

export default CreateTeamFields
