import React, { useContext } from 'react'
import type { PageContext } from './types'

interface PageContextProviderProps {
  pageContext: PageContext
  children: React.ReactNode
}

const Context = React.createContext<PageContext>(undefined as any)

/**
 * Permet d'ajouter un contexte sur les pages React et ses enfants.
 *
 */
export const PageContextProvider = ({
  pageContext,
  children,
}: PageContextProviderProps) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export const usePageContext = () => {
  const pageContext = useContext(Context)
  if (!pageContext) {
    throw new Error(
      'usePageContext doit être utilisé dans un composant enfant de PageContextProvider'
    )
  }
  return pageContext
}
