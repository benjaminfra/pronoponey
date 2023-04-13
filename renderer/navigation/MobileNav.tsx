import { Flex, FlexProps, IconButton, Text, HStack } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import LinkButton from '../../common/components/LinkButton'
import HeaderMenu from './HeaderMenu'
import { usePageContext } from '../usePageContext'

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { logout } = useContext(AuthContext)
  const pageContext = usePageContext()

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.400"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          {pageContext.loggedUser ? (
            <HeaderMenu user={pageContext.loggedUser} logout={logout} />
          ) : (
            <HStack spacing={5}>
              <LinkButton href="/auth/signup" title="S'incrire" />
              <LinkButton href="/auth/login" title="Se connecter" />
            </HStack>
          )}
        </Flex>
      </HStack>
    </Flex>
  )
}

export default MobileNav
