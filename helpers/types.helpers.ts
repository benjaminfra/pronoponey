// eslint-disable-next-line import/prefer-default-export
export function ensure<T>(
  argument: T | undefined | null,
  message = 'This value was promised to be there.'
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message)
  }

  return argument
}
