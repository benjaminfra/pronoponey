/* eslint-disable import/prefer-default-export */
const NOT_FOUND_MESSAGE = 'This page could not be found.'
const SERVER_ERROR_MESSAGE = 'Something went wrong.'
const NOT_FOUND_STATUS_CODE = 404

export function Page({ statusCode }: { statusCode: number }) {
  const errorMessage =
    statusCode === NOT_FOUND_STATUS_CODE
      ? NOT_FOUND_MESSAGE
      : SERVER_ERROR_MESSAGE

  return (
    <>
      <h1>{statusCode} Error</h1>
      <p>{errorMessage}</p>
    </>
  )
}
