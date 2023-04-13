import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'
import NavItem from './NavItem'
import { IconType } from 'react-icons'
import { FiHome, FiDribbble, FiLogIn, FiTool } from 'react-icons/fi'
import { Roles } from '../../server/db/models/userModel'
import { usePageContext } from '../usePageContext'

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const pageContext = usePageContext()

  let LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, href: '/' },
  ]

  const loggedUser = pageContext.loggedUser

  if (loggedUser) {
    LinkItems.push({ name: 'Play', icon: FiDribbble, href: '/play' })
    if (loggedUser.role === Roles.Admin) {
      LinkItems.push({
        name: 'Admin',
        icon: FiTool,
        href: '/admin',
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
