/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch'
import { PageContext } from '../../renderer/types'

export const onBeforeRender = async (pageContext: PageContext) => {
  if (!pageContext.loggedUser) {
    return {
      pageContext: {
        redirectTo: '/auth/login'
      }
    }
  }

  const weeksResponse = await fetch('http://localhost:3000/weeks')
  const teamsResponse = await fetch('http://localhost:3000/teams')

  const weeks = await weeksResponse.json()
  const teams = await teamsResponse.json()

  const pageProps = { weeks, teams }
  return {
    pageContext: {
      pageProps
    }
  }
}
