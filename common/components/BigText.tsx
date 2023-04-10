import { Text, TextProps } from '@chakra-ui/react'

interface BigTextProps {
  text: string | number | undefined
}

const BigText = ({ text, ...rest }: BigTextProps & TextProps) => {
  return (
    <Text
      fontSize="2xl"
      fontFamily="monospace"
      fontWeight="bold"
      textAlign="center"
      {...rest}
    >
      {text}
    </Text>
  )
}

export default BigText
