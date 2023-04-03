import { renderPage } from 'vite-plugin-ssr'
import { FastifyRequest, FastifyReply } from 'fastify'

export const routeHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  console.log(req.cookies.loggedUser)
  const pageContextInit = {
    urlOriginal: req.url,
    loggedUser: req.cookies.loggedUser
      ? JSON.parse(req.cookies.loggedUser)
      : undefined,
  }

  const pageContext = await renderPage(pageContextInit)
  const { httpResponse } = pageContext
  if (pageContext.redirectTo) {
    reply.redirect(307, pageContext.redirectTo)
  } else if (!httpResponse) {
    return reply.code(404).type('text/html').send('Not Found')
  }

  const { body, statusCode, contentType } = httpResponse

  return reply.status(statusCode).type(contentType).send(body)
}
