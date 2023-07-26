import {
  Menu,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  Text,
  MenuList,
  MenuDivider,
  MenuItem
} from '@chakra-ui/react'
import { ILoggedUser } from '../../server/db/models/userModel'

type HeaderMenuProps = {
  user: ILoggedUser
  logout: (user: ILoggedUser) => void
}

function HeaderMenu({ user, logout }: HeaderMenuProps) {
  const onClickLogout = () => {
    logout(user)
  }
  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
        <HStack>
          <>
            <Avatar size="md" name={user.username} />
            <VStack
              display={{ base: 'none', md: 'flex' }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text
                fontSize="md"
                color="yellow.800"
                fontFamily="Jakarta Plus Sans"
                fontWeight="bold"
                letterSpacing={2}
                textTransform="uppercase"
              >
                {user.username}
              </Text>
            </VStack>
          </>
        </HStack>
      </MenuButton>
      <MenuList bg="white" boxShadow="lg">
        <MenuItem>Profil</MenuItem>
        <MenuDivider />
        <MenuItem onClick={onClickLogout}>Se déconnecter</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default HeaderMenu
