import { useMemo, useCallback, createContext, useState, useEffect } from 'react'
import { ILoggedUser, IUser } from '../../server/db/models/userModel'
import { login, signUp, logout } from '../../api/auth.api'
import { useToast } from '@chakra-ui/react'

interface IAuthProvider {
  children: React.ReactNode
}

interface IAuthContext {
  loggedUser: ILoggedUser | undefined
  signUp: (user: IUser) => Promise<void>
  login: (user: IUser) => Promise<void>
  logout: (user: ILoggedUser) => Promise<void>
  isUserLoading: boolean
}

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  signUp: async () => {},
  login: async () => {},
  logout: async () => {},
  isUserLoading: false,
})

const AuthProvider = ({ children }: IAuthProvider) => {
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>()
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false)

  const toast = useToast()

  const signUpUser = async (user: IUser) => {
    setIsUserLoading(true)
    try {
      const loggedUser = await signUp(user)
      setLoggedUser(loggedUser)
      sessionStorage.setItem('user', JSON.stringify(loggedUser))
      toast({
        title: 'Compte créé',
        description: 'Tu fais désormais parti de la team',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
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
      const loggedUser = await login(user)
      setLoggedUser(loggedUser)
      sessionStorage.setItem('user', JSON.stringify(loggedUser))
      window.location.reload()
      toast({
        title: 'Connexion réussie',
        description: "C'est le moment de tout donner",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error: any) {
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
      await logout(user)
      sessionStorage.removeItem('user')
      setLoggedUser(undefined)
      window.location.reload()
      toast({
        title: 'Déconnexion réussie',
        description: 'Reviens vite',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
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
    const storedUser = sessionStorage.getItem('user')
    if (storedUser && !loggedUser) {
      const jsonUser = JSON.parse(storedUser)
      setIsUserLoading(true)
      setLoggedUser({
        username: jsonUser.username,
        id: jsonUser.id,
        tokens: jsonUser.tokens,
      })
    }
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
      loggedUser,
      signUp: memoizedSignUpUser,
      login: memoizedLoginUser,
      logout: memoizedLogoutUser,
      isUserLoading,
    }),
    [
      loggedUser,
      memoizedSignUpUser,
      memoizedLoginUser,
      memoizedLogoutUser,
      isUserLoading,
    ]
  )

  return <AuthContext.Provider value={userCtx}>{children}</AuthContext.Provider>
}

export default AuthProvider
