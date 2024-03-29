import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ReactNode } from 'react'
import MobileNav from './MobileNav'
import SidebarContent from './SidebarContent'

type SidebarWithHeaderProps = {
  children: ReactNode
}

function SidebarWithHeader({ children }: SidebarWithHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh">
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
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
