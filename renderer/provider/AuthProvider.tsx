import { useMemo, useCallback, createContext, useState, useEffect } from 'react'
import { IUser } from '../../server/db/models/userModel'
import { signUp } from '../../api/auth.api'

interface IAuthProvider {
  children: React.ReactNode
}

interface IAuthContext {
  loggedUser: IUser | undefined
  signUp: (user: IUser) => Promise<void>
  isUserLoading: boolean
}

export const AuthContext = createContext<IAuthContext>({
  loggedUser: undefined,
  signUp: async () => {},
  isUserLoading: false,
})

const AuthProvider = ({ children }: IAuthProvider) => {
  const [loggedUser, setLoggedUser] = useState<IUser>()
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false)

  const signUpUser = async (user: IUser) => {
    setIsUserLoading(true)
    const loggedUser = await signUp(user)
    setLoggedUser(loggedUser)
    localStorage.setItem('user', JSON.stringify(loggedUser))
    setIsUserLoading(false)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const jsonUser = JSON.parse(storedUser)
      setIsUserLoading(true)
      setLoggedUser({
        email: jsonUser.email,
        password: jsonUser.password,
        username: jsonUser.username,
      })
      setIsUserLoading(false)
    }
  }, [])
  const memoizedSignUpUser = useCallback(async (user: IUser) => {
    await signUpUser(user)
  }, [])

  const userCtx = useMemo(
    () => ({
      loggedUser,
      signUp: memoizedSignUpUser,
      isUserLoading,
    }),
    [loggedUser, memoizedSignUpUser, isUserLoading]
  )

  return <AuthContext.Provider value={userCtx}>{children}</AuthContext.Provider>
}

export default AuthProvider
