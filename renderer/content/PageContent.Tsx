import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Center, Spinner } from '@chakra-ui/react'
import SidebarWithHeader from '../navigation/SidebarWithHeader'

interface PageContentProps {
  children: React.ReactNode
}

const PageContent = ({ children }: PageContentProps) => {
  const { isUserLoading } = useContext(AuthContext)
  if (isUserLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  } else {
    return <SidebarWithHeader children={children} />
  }
}

export default PageContent
