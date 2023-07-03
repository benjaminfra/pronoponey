/* eslint-disable import/prefer-default-export */
import { useState, useContext } from 'react'
import { AuthContext } from '../../../renderer/provider/AuthProvider'
import PasswordFormInput from '../components/PasswordFormInput'
import AuthForm from '../components/AuthForm'
import UsernameFormInput from '../components/UsernameFormInput'

export function Page() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { login } = useContext(AuthContext)

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onSubmit = () => {
    login({
      username,
      password
    })
  }

  const isUsernameValid: boolean = username.length > 5
  const isPasswordValid: boolean = password.length > 0

  return (
    <AuthForm
      formTitle="Connecte-toi"
      submitTitle="Se connecter"
      onSubmit={onSubmit}
      disabled={!isUsernameValid || !isPasswordValid}
    >
      <UsernameFormInput
        username={username}
        onChange={onChangeUsername}
        isValid={username === '' || isUsernameValid}
      />
      <PasswordFormInput password={password} onChange={onChangePassword} />
    </AuthForm>
  )
}
