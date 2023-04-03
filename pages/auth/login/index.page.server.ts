import { PageContext } from '../../../renderer/types'

export const onBeforeRender = async (pageContext: PageContext) => {
  if (pageContext.loggedUser) {
    return {
      pageContext: {
        redirectTo: '/play',
      },
    }
  }
}
