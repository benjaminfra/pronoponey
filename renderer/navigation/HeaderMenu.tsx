import { ILoggedUser } from '../../server/db/models/userModel'
import {
  Menu,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  Text,
  MenuList,
  MenuDivider,
  MenuItem,
} from '@chakra-ui/react'

interface HeaderMenuProps {
  user: ILoggedUser
  logout: () => void
}

const HeaderMenu = ({ user, logout }: HeaderMenuProps) => {
  const onClickLogout = (_e: React.MouseEvent<HTMLButtonElement>) => {
    logout()
  }
  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
        <HStack>
          <>
            <Avatar size={'sm'} name={user.username} />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm">{user.username}</Text>
            </VStack>
          </>
        </HStack>
      </MenuButton>
      <MenuList bg={'white'} boxShadow={'lg'}>
        <MenuItem>Profil</MenuItem>
        <MenuDivider />
        <MenuItem onClick={onClickLogout}>Se déconnecter</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default HeaderMenu
