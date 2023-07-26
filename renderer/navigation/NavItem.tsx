import { FlexProps, Flex, Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

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
        py={2}
        mx="4"
        pl={4}
        borderRadius="xl"
        role="group"
        cursor="pointer"
        color="white"
        fontWeight="bold"
        my={5}
        _hover={{
          bg: 'charcoal.500'
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color="yellow.800"
            as={icon}
            height={8}
            width={8}
            p={2}
            bg="charcoal.200"
            borderRadius="xl"
          />
        )}
        {label}
      </Flex>
    </Link>
  )
}

export default NavItem
