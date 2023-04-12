import { useState, useContext } from 'react'
import { AuthContext } from '../../../renderer/provider/AuthProvider'
import PasswordFormInput from '../components/PasswordFormInput'
import UsernameFormInput from '../components/UsernameFormInput'
import AuthForm from '../components/AuthForm'
import { Roles } from '../../../server/db/models/userModel'

export const Page = () => {
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const { signUp } = useContext(AuthContext)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  const onSubmit = (_e: React.MouseEvent<HTMLButtonElement>) => {
    signUp({
      password,
      username,
      role: Roles.User,
    })
  }

  const isUsernameValid: boolean = username.length > 5
  const isPasswordValid: boolean = password.length > 7

  console.log('username: ', username)
  console.log('isUsernameValid : ', isUsernameValid)
  console.log('isPasswordValid : ', isPasswordValid)

  return (
    <AuthForm
      formTitle="Rejoins le box"
      submitTitle="S'inscrire"
      onSubmit={onSubmit}
      disabled={!isUsernameValid || !isPasswordValid}
    >
      <UsernameFormInput
        username={username}
        onChange={onChangeUsername}
        isValid={username === '' || isUsernameValid}
      />
      <PasswordFormInput
        password={password}
        onChange={onChangePassword}
        isValid={password === '' || isPasswordValid}
      />
    </AuthForm>
  )
}
