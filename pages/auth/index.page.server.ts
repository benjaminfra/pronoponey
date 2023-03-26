import { PageContext } from '../../renderer/types'

export const onBeforeRender = async (pageContext: PageContext) => {
  return {
    pageContext: {
      redirectTo: pageContext.isLoggedUser ? '/play' : '/auth/login',
    },
  }
}
