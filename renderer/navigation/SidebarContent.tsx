import {
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Flex,
  Text
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FiHome, FiDribbble, FiUsers, FiCalendar } from 'react-icons/fi'
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
        name: 'Equipes',
        icon: FiUsers,
        href: '/admin/teams'
      })
      LinkItems.push({
        name: 'Journées',
        icon: FiCalendar,
        href: '/admin/weeks'
      })
    }
  }

  return (
    <Box
      transition="3s ease"
      bgGradient="linear(to-l, #192531, #213242)"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      ml={{ base: 0, md: 5 }}
      mt={{ base: 0, md: 5 }}
      mb={{ base: 0, md: 10 }}
      height="calc(100vh - 32px)"
      borderRadius={{ base: 'none', md: 'xl' }}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="Plus Jakarta Sans"
          fontWeight="bold"
          letterSpacing="3px"
          color="yellow.700"
        >
          Prono Poney
        </Text>
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
          color="white"
        />
      </Flex>
      <Divider
        orientation="horizontal"
        color="white"
        height="1px"
        bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 47.22%, rgba(224, 225, 226, 0.157) 94.44%)"
        width="60%"
        margin="auto"
      />
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
