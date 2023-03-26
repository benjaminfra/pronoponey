import { PageContext } from '../../../renderer/types'

export const onBeforeRender = async (pageContext: PageContext) => {
  if (pageContext.isLoggedUser) {
    return {
      pageContext: {
        redirectTo: '/play',
      },
    }
  }
}
