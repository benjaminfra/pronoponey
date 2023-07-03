import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FiHome, FiDribbble, FiTool } from 'react-icons/fi'
import NavItem from './NavItem'
import { Roles } from '../../server/db/models/userModel'
import { usePageContext } from '../usePageContext'

type SidebarProps = {
  onClose: () => void
} & BoxProps

type LinkItemProps = {
  name: string
  icon: IconType
  href: string
}

function SidebarContent({ onClose, ...rest }: SidebarProps) {
  const pageContext = usePageContext()

  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: '/' }
  ]

  const { loggedUser } = pageContext

  if (loggedUser) {
    LinkItems.push({ name: 'Play', icon: FiDribbble, href: '/play' })
    if (loggedUser.role === Roles.Admin) {
      LinkItems.push({
        name: 'Admin',
        icon: FiTool,
        href: '/admin'
      })
    }
  }

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.400"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          label={link.name}
          icon={link.icon}
          key={link.name}
          href={link.href}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
