/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { PageContext } from '../../../renderer/types'
import { Roles } from '../../../server/db/models/userModel'

export const onBeforeRender = async (pageContext: PageContext) => {
  if (!pageContext.loggedUser) {
    return {
      pageContext: {
        redirectTo: '/auth'
      }
    }
  }
  if (pageContext.loggedUser.role !== Roles.Admin) {
    return {
      pageContext: {
        redirectTo: '/play'
      }
    }
  }
}
