import { NextPage } from 'next'
import { useState } from 'react'
import { emailRegexp, pwRegexp } from '../../util/util'
import {
  CreateAccountStyle,
  ErrorMessageStyle,
  AuthBodyStyle,
  AuthButtonStyle,
  AuthContentStyle,
  AuthInputContainerStyle,
  AuthInputStyle,
  AuthTitleStyle,
  AuthWithTitleStyle,
  AuthWithYeahContainerStyle,
  NotHaveAccountStyle,
  ToggleModeLinkStyle,
} from './Login.style'

interface Props {
  setIsLogin: (v: boolean) => void
}

const SignUpContent: NextPage<Props> = ({ setIsLogin }) => {
  const [badInput, setBadInput] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [username, setUsername] = useState('')

  const checkInput = () => {
    if (!emailRegexp.test(email)) {
      setBadInput(true)
      setError('유효하지 않은 이메일입니다.')
    } else if (!pwRegexp.test(password)) {
      setBadInput(true)
      setError('비밀번호는 특수문자, 알파벳으로 8자리 이상이어야합니다.')
    } else if (password !== passwordConfirm) {
      setBadInput(true)
      setError('비밀번호가 일치하지 않습니다.')
    } else if (username.length == 0 || username.length > 20) {
      setBadInput(true)
      setError('이름은 20자 이하여야합니다.')
    } else {
      setBadInput(false)
      setError('')
    }
  }

  return (
    <AuthContentStyle>
      <AuthBodyStyle>
        <AuthTitleStyle>회원가입</AuthTitleStyle>
        <AuthWithTitleStyle>Yeah-Planner 계정 만들기</AuthWithTitleStyle>
        <div>
          <AuthWithYeahContainerStyle>
            <AuthInputContainerStyle>
              <AuthInputStyle
                type="email"
                placeholder="이메일"
                value={email}
                onChange={({ target: { value } }) =>
                  setEmail(value.replaceAll(' ', ''))
                }
              />
              <AuthInputStyle
                type="text"
                placeholder="이름"
                value={username}
                onChange={({ target: { value } }) => setUsername(value.trim())}
              />
              <AuthInputStyle
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={({ target: { value } }) =>
                  setPassword(value.replaceAll(' ', ''))
                }
              />
              <AuthInputStyle
                type="password"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={({ target: { value } }) =>
                  setPasswordConfirm(value.replaceAll(' ', ''))
                }
              />
            </AuthInputContainerStyle>
            <AuthButtonStyle
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                checkInput()
                if (!badInput) {
                  // TODO: Sign up request
                }
              }}
            >
              회원가입
            </AuthButtonStyle>
          </AuthWithYeahContainerStyle>
          {badInput && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
        </div>
        {/* <LoginWithTitleStyle>소셜 계정으로 회원가입</LoginWithTitleStyle>
        <LoginWithSocialContainerStyle>
          Coming Soon
        </LoginWithSocialContainerStyle> */}
      </AuthBodyStyle>
      <CreateAccountStyle>
        <NotHaveAccountStyle>이미 계정이 있으신가요?</NotHaveAccountStyle>
        <ToggleModeLinkStyle
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setIsLogin(true)
          }}
        >
          로그인
        </ToggleModeLinkStyle>
      </CreateAccountStyle>
    </AuthContentStyle>
  )
}

export default SignUpContent
