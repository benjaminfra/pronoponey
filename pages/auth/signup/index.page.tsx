import { useState, useContext } from 'react'
import { AuthContext } from '../../../renderer/provider/AuthProvider'
import EmailFormInput from '../components/EmailFormInput'
import PasswordFormInput from '../components/PasswordFormInput'
import UsernameFormInput from '../components/UsernameFormInput'
import AuthForm from '../components/AuthForm'
import { EMAIL_REGEX } from '../../../helpers/constants'

export const Page = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const { signUp } = useContext(AuthContext)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  const onSubmit = (_e: React.MouseEvent<HTMLButtonElement>) => {
    signUp({
      email,
      password,
      username,
    })
  }

  const isUsernameValid: boolean = username.length > 0
  const isPasswordValid: boolean = password.length > 7
  const isEmailValid: boolean = !!email.match(EMAIL_REGEX)

  return (
    <AuthForm
      formTitle="Rejoins le box"
      submitTitle="S'inscrire"
      onSubmit={onSubmit}
      disabled={!isUsernameValid || !isPasswordValid || !isEmailValid}
    >
      <EmailFormInput
        email={email}
        onChange={onChangeEmail}
        isValid={email === '' || isEmailValid}
      />
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
