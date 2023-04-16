import { Input, InputProps, useMultiStyleConfig } from '@chakra-ui/react'

const FileInput = (props: InputProps) => {
  const styles = useMultiStyleConfig('Button', { variant: 'outline' })

  return (
    <Input
      type="file"
      sx={{
        '::file-selector-button': {
          border: 'none',
          outline: 'none',
          mr: 2,
          ...styles,
        },
      }}
      {...props}
    />
  )
}

export default FileInput
