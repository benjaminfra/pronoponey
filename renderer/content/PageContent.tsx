import { useContext } from 'react'
import { Center, Spinner } from '@chakra-ui/react'
import { AuthContext } from '../provider/AuthProvider'
import SidebarWithHeader from '../navigation/SidebarWithHeader'

type PageContentProps = {
  children: React.ReactNode
}

function PageContent({ children }: PageContentProps) {
  const { isUserLoading } = useContext(AuthContext)
  if (isUserLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  }
  return <SidebarWithHeader>{children}</SidebarWithHeader>
  
}

export default PageContent
