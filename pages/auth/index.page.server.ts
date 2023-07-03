/* eslint-disable import/prefer-default-export */
import { PageContext } from '../../renderer/types'

export const onBeforeRender = async (pageContext: PageContext) => {
  return {
    pageContext: {
      redirectTo: pageContext.loggedUser ? '/play' : '/auth/login',
    },
  }
  return pageContext
}
