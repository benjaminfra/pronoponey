import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import SidebarWithHeader from './navigation/SidebarWithHeader'
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
            <SidebarWithHeader children={children} />
          </AuthProvider>
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
