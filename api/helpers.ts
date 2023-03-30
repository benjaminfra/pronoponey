import { Token } from '../server/db/models/userModel'

export const getAuthorizationHeader = (
  tokens: Token[] | undefined,
  hasBody: boolean = false
): HeadersInit => {
  const lastToken = tokens && tokens.length ? tokens.slice(-1)[0].token : ''
  const requestHeaders: HeadersInit = new Headers()
  if (hasBody) {
    requestHeaders.set('Content-Type', 'application/json')
  }
  requestHeaders.set('authorization', lastToken)
  return requestHeaders
}
