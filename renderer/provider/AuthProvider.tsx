import {
  useMemo,
  useCallback,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react'
import { ILoggedUser, IUser } from '../../server/db/models/userModel'
import { useToast } from '@chakra-ui/react'
import { ServiceContext } from './ServiceProvider'
import { ensure } from '../../helpers/types.helpers'

interface IAuthProvider {
  children: React.ReactNode
}

interface IAuthContext {
  signUp: (user: IUser) => Promise<void>
  login: (user: IUser) => Promise<void>
  logout: (user: ILoggedUser) => Promise<void>
  isUserLoading: boolean
}

export const AuthContext = createContext<IAuthContext>({
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},
  isUserLoading: false,
})

const AuthProvider = ({ children }: IAuthProvider) => {
  const { authService } = useContext(ServiceContext)
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false)

  const toast = useToast()

  const signUpUser = async (user: IUser) => {
    setIsUserLoading(true)
    try {
      await authService.signUp(user)
      toast({
        title: 'Compte créé',
        description: 'Tu fais désormais parti de la team',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
      setIsUserLoading(false)
      toast({
        title: 'Une erreur est survenue',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const loginUser = async (user: IUser) => {
    setIsUserLoading(true)
    try {
      await authService.login(user)
      window.location.reload()
      toast({
        title: 'Connexion réussie',
        description: "C'est le moment de tout donner",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
      setIsUserLoading(false)
      toast({
        title: 'Une erreur est survenue',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const logoutUser = async (user: ILoggedUser) => {
    setIsUserLoading(true)
    try {
      await authService.logout()
      window.location.reload()
      toast({
        title: 'Déconnexion réussie',
        description: 'Reviens vite',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      setIsUserLoading(false)
      toast({
        title: 'Une erreur est survenue',
        description: 'On a pas réussi à te déconnecter :/',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    setIsUserLoading(false)
  }, [])
  const memoizedSignUpUser = useCallback(async (user: IUser) => {
    await signUpUser(user)
  }, [])

  const memoizedLoginUser = useCallback(async (user: IUser) => {
    await loginUser(user)
  }, [])

  const memoizedLogoutUser = useCallback(async (user: ILoggedUser) => {
    await logoutUser(user)
  }, [])

  const userCtx = useMemo(
    () => ({
      signUp: memoizedSignUpUser,
      login: memoizedLoginUser,
      logout: memoizedLogoutUser,
      isUserLoading,
    }),
    [memoizedSignUpUser, memoizedLoginUser, memoizedLogoutUser, isUserLoading]
  )

  return <AuthContext.Provider value={userCtx}>{children}</AuthContext.Provider>
}

export default AuthProvider
