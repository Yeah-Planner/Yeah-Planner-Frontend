import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  CreateAccountStyle,
  LoginBodyStyle,
  LoginButtonStyle,
  LoginContentStyle,
  LoginInputContainerStyle,
  LoginInputStyle,
  LoginTitleStyle,
  LoginWithSocialContainerStyle,
  LoginWithTitleStyle,
  LoginWithYeahContainerStyle,
  NotHaveAccountStyle,
  SignUpLinkStyle,
} from './Login.style'

interface Props {
  setIsLogin: (v: boolean) => void
}

const LoginContent: NextPage<Props> = ({ setIsLogin }) => {
  return (
    <LoginContentStyle>
      <LoginBodyStyle>
        <LoginTitleStyle>로그인</LoginTitleStyle>
        <LoginWithTitleStyle>Yeah-Planner 계정으로 로그인</LoginWithTitleStyle>
        <LoginWithYeahContainerStyle>
          <LoginInputContainerStyle>
            <LoginInputStyle type="email" placeholder="이메일" />
            <LoginInputStyle type="password" placeholder="비밀번호" />
          </LoginInputContainerStyle>
          <LoginButtonStyle>로그인</LoginButtonStyle>
        </LoginWithYeahContainerStyle>
        <LoginWithTitleStyle>소셜 계정으로 로그인</LoginWithTitleStyle>
        <LoginWithSocialContainerStyle>
          Coming Soon
        </LoginWithSocialContainerStyle>
      </LoginBodyStyle>
      <CreateAccountStyle>
        <NotHaveAccountStyle>계정이 없으신가요?</NotHaveAccountStyle>
        <SignUpLinkStyle
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setIsLogin(false)
          }}
        >
          회원가입
        </SignUpLinkStyle>
      </CreateAccountStyle>
    </LoginContentStyle>
  )
}

export default LoginContent
