import { NextPage } from 'next'
import { useRouter } from 'next/router'
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
} from './Login.style'

interface Props {
  setIsLogin: (v: boolean) => void
}

const LoginContent: NextPage<Props> = ({ setIsLogin }) => {
  return (
    <AuthContentStyle>
      <AuthBodyStyle>
        <AuthTitleStyle>로그인</AuthTitleStyle>
        <AuthWithTitleStyle>Yeah-Planner 계정으로 로그인</AuthWithTitleStyle>
        <AuthWithYeahContainerStyle>
          <AuthInputContainerStyle>
            <AuthInputStyle type="email" placeholder="이메일" />
            <AuthInputStyle type="password" placeholder="비밀번호" />
          </AuthInputContainerStyle>
          <AuthButtonStyle>로그인</AuthButtonStyle>
        </AuthWithYeahContainerStyle>
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
