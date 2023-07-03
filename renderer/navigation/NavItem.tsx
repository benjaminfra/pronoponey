import { FlexProps, Flex, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import Link from '../Link'

type NavItemProps = {
  icon: IconType
  label: string
  href: string
} & FlexProps

function NavItem({ icon, label, href }: NavItemProps) {
  return (
    <Link href={href}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'darkGrey.100',
          color: 'white'
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {label}
      </Flex>
    </Link>
  )
}

export default NavItem
