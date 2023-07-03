import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithServerRouting
} from 'vite-plugin-ssr/types'
import { ILoggedUser } from '../server/db/models/userModel'

type Page = (pageProps: PageProps) => React.ReactElement

export type PageProps = object

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
  loggedUser?: ILoggedUser
  redirectTo?: string
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient =
  PageContextBuiltInClientWithServerRouting<Page> & PageContextCustom

export type PageContext = PageContextClient | PageContextServer
