import { Link, Button, ButtonProps } from '@chakra-ui/react'

type LinkButtonProps = {
  href: string
  title: string
} & ButtonProps

function LinkButton({ href, title, ...rest }: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button {...rest}>{title}</Button>
    </Link>
  )
}

export default LinkButton
