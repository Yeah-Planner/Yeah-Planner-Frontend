import axios, { AxiosError } from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { loginUser } from '../../storage/storage'
import { backend, emailRegexp, pwRegexp } from '../../util/util'
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
} from './Auth.style'
import { UserResponse } from './Auth.type'

interface Props {
  setIsLogin: (v: boolean) => void
}

const LoginContent: NextPage<Props> = ({ setIsLogin }) => {
  const [badInput, setBadInput] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    } else {
      setBadInput(false)
      setError('')
      return false
    }
  }

  const login = async () => {
    if (checkInput()) return

    try {
      const { data } = await axios.post<UserResponse>(
        `${backend()}/user/login`,
        {
          password,
          email,
        }
      )

      loginUser(data)
      router.replace('/')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const err = e as AxiosError<UserResponse>

        switch (err.response?.status) {
          case 404:
            setBadInput(true)
            setError('이메일을 찾을 수 없습니다.')
            break
          case 403:
            setBadInput(true)
            setError('비밀번호가 틀렸습니다.')
            break
          default:
            setBadInput(true)
            setError('알 수 없는 오류가 발생했습니다.')
        }
      } else {
        setBadInput(true)
        setError('오류가 발생했습니다.')
        console.error(e)
      }
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
                login()
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
