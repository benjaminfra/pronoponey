import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
        bg: '#101820'
      }
    }
  },
  colors: {
    yellow: {
      200: '#FEEF61',
      300: '#FEEC48',
      400: '#FEEA2E',
      500: '#FEE715',
      600: '#F8E001',
      700: '#DFC901',
      800: '#C6B201'
    },
    charcoal: {
      200: '#2A3E53',
      300: '#213242',
      400: '#192531',
      500: '#101820',
      600: '#080B0F',
      700: '#000000',
      800: '#000000'
    }
  }
})

export default theme
