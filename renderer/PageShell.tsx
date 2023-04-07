import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import PageContent from './content/PageContent'
import AuthProvider from './provider/AuthProvider'
import ServiceProvider from './provider/ServiceProvider'

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
          <ServiceProvider>
            <AuthProvider>
              <PageContent children={children} />
            </AuthProvider>
          </ServiceProvider>
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
