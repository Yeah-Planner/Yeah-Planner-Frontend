import axios, { AxiosError } from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { loginUser } from '../../storage/storage'
import { backend, emailRegexp, pwRegexp } from '../../util/util'
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
} from './Auth.style'
import { UserResponse } from './Auth.type'

interface Props {
  setIsLogin: (v: boolean) => void
  handleClose(): void
}

const SignUpContent: NextPage<Props> = ({ setIsLogin, handleClose }) => {
  const [badInput, setBadInput] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [username, setUsername] = useState('')
  const router = useRouter()

  const checkInput = () => {
    if (!emailRegexp.test(email)) {
      setBadInput(true)
      setError('유효하지 않은 이메일입니다.')
      return true
    } else if (!pwRegexp.test(password)) {
      setBadInput(true)
      setError('비밀번호는 특수문자, 알파벳으로 8자리 이상이어야합니다.')
      return true
    } else if (password !== passwordConfirm) {
      setBadInput(true)
      setError('비밀번호가 일치하지 않습니다.')
      return true
    } else if (username.length == 0 || username.length > 20) {
      setBadInput(true)
      setError('이름은 20자 이하여야합니다.')
      return true
    } else {
      setBadInput(false)
      setError('')
      return false
    }
  }

  const signUp = async () => {
    if (checkInput()) return

    try {
      const { data } = await axios.post<UserResponse>(`${backend()}/user`, {
        email,
        username,
        password,
      })

      loginUser(data)
      router.replace('/')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const err = e as AxiosError<UserResponse>

        if (err.response?.status === 409) {
          setBadInput(true)
          setError('이미 존재하는 이메일입니다.')
          return
        } else {
          setBadInput(true)
          setError('알 수 없는 오류가 발생했습니다.')
          console.error(err)
          return
        }
      } else {
        setBadInput(true)
        setError('오류가 발생했습니다.')
        console.error(e)
        return
      }
    }
  }

  const signupOnEnter = ({ key }: React.KeyboardEvent<HTMLInputElement>) =>
    key === 'Enter' && signUp()

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
                onKeyPress={signupOnEnter}
              />
              <AuthInputStyle
                type="text"
                placeholder="이름"
                value={username}
                onChange={({ target: { value } }) => setUsername(value.trim())}
                onKeyPress={signupOnEnter}
              />
              <AuthInputStyle
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={({ target: { value } }) =>
                  setPassword(value.replaceAll(' ', ''))
                }
                onKeyPress={signupOnEnter}
              />
              <AuthInputStyle
                type="password"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={({ target: { value } }) =>
                  setPasswordConfirm(value.replaceAll(' ', ''))
                }
                onKeyPress={signupOnEnter}
              />
            </AuthInputContainerStyle>
            <AuthButtonStyle
              onClick={async e => {
                e.preventDefault()
                e.stopPropagation()
                signUp()
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
