import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import PageContent from './content/PageContent'
import AuthProvider from './provider/AuthProvider'

export { PageShell }

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <PageContent children={children} />
          </AuthProvider>
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
