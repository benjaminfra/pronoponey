import { Link, Button, ButtonProps } from '@chakra-ui/react'

interface LinkButtonProps extends ButtonProps {
  href: string
  title: string
}

const LinkButton = ({ href, title, ...rest }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <Button {...rest}>{title}</Button>
    </Link>
  )
}

export default LinkButton
