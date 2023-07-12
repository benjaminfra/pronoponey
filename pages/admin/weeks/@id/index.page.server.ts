/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { PageContext } from '../../../../renderer/types'
import { Roles } from '../../../../server/db/models/userModel'

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

  if (!pageContext.routeParams) {
    return {
      pageContext: {
        redirectTo: '/admin/weeks'
      }
    }
  }

  try {
    const weekResponse = await fetch(
      `http://localhost:3000/weeks/${pageContext.routeParams.id}`
    )
    const teamsResponse = await fetch('http://localhost:3000/teams')

    const week = await weekResponse.json()
    const teams = await teamsResponse.json()
    const pageProps = { week, teams }
    return {
      pageContext: {
        pageProps
      }
    }
  } catch (error: any) {
    return {
      pageContext: {
        redirectTo: '/admin/weeks'
      }
    }
  }
}
