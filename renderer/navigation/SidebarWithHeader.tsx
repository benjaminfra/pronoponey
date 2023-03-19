import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ReactNode } from 'react'
import MobileNav from './MobileNav'
import SidebarContent from './SidebarContent'

interface SidebarWithHeaderProps {
  children: ReactNode
}

const SidebarWithHeader = ({ children }: SidebarWithHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
