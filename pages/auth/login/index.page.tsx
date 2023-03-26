import { useState, useContext } from 'react'
import { AuthContext } from '../../../renderer/provider/AuthProvider'
import EmailFormInput from '../components/EmailFormInput'
import PasswordFormInput from '../components/PasswordFormInput'
import AuthForm from '../components/AuthForm'
import { EMAIL_REGEX } from '../../../helpers/constants'

export const Page = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { login } = useContext(AuthContext)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onSubmit = (_e: React.MouseEvent<HTMLButtonElement>) => {
    login({
      email,
      password,
    })
  }

  const isEmailValid: boolean = !!email.match(EMAIL_REGEX)
  const isPasswordValid: boolean = password.length > 0

  return (
    <AuthForm
      formTitle="Connecte-toi"
      submitTitle="Se connecter"
      onSubmit={onSubmit}
      disabled={!isEmailValid || !isPasswordValid}
    >
      <EmailFormInput
        email={email}
        onChange={onChangeEmail}
        isValid={email === '' || isEmailValid}
      />
      <PasswordFormInput password={password} onChange={onChangePassword} />
    </AuthForm>
  )
}
