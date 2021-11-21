import { NextPage } from 'next'
import { useState } from 'react'
import { emailRegexp, pwRegexp } from '../../util/util'
import {
  CreateAccountStyle,
  AuthBodyStyle,
  AuthButtonStyle,
  AuthContentStyle,
  AuthInputContainerStyle,
  AuthInputStyle,
  AuthTitleStyle,
  AuthWithSocialContainerStyle,
  AuthWithTitleStyle,
  AuthWithYeahContainerStyle,
  NotHaveAccountStyle,
  ToggleModeLinkStyle,
  ErrorMessageStyle,
} from './Login.style'

interface Props {
  setIsLogin: (v: boolean) => void
}

const LoginContent: NextPage<Props> = ({ setIsLogin }) => {
  const [badInput, setBadInput] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const checkInput = () => {
    if (!emailRegexp.test(email)) {
      setBadInput(true)
      setError('유효하지 않은 이메일입니다.')
    } else if (!pwRegexp.test(password)) {
      setBadInput(true)
      setError('비밀번호는 특수문자, 알파벳으로 8자리 이상이어야합니다.')
    } else {
      setBadInput(false)
      setError('')
    }
  }

  return (
    <AuthContentStyle>
      <AuthBodyStyle>
        <AuthTitleStyle>로그인</AuthTitleStyle>
        <AuthWithTitleStyle>Yeah-Planner 계정으로 로그인</AuthWithTitleStyle>
        <div>
          <AuthWithYeahContainerStyle>
            <AuthInputContainerStyle>
              <AuthInputStyle
                type="email"
                placeholder="이메일"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
              <AuthInputStyle
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </AuthInputContainerStyle>
            <AuthButtonStyle
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                checkInput()
                if (!badInput) {
                  // TODO: Login Request
                }
              }}
            >
              로그인
            </AuthButtonStyle>
          </AuthWithYeahContainerStyle>
          {badInput && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
        </div>
        <AuthWithTitleStyle>소셜 계정으로 로그인</AuthWithTitleStyle>
        <AuthWithSocialContainerStyle>Coming Soon</AuthWithSocialContainerStyle>
      </AuthBodyStyle>
      <CreateAccountStyle>
        <NotHaveAccountStyle>계정이 없으신가요?</NotHaveAccountStyle>
        <ToggleModeLinkStyle
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setIsLogin(false)
          }}
        >
          회원가입
        </ToggleModeLinkStyle>
      </CreateAccountStyle>
    </AuthContentStyle>
  )
}

export default LoginContent
