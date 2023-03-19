import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
  colors: {
    darkGrey: {
      100: 'rgb(60 60 59)',
    },
  },
})

export default theme
