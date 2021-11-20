import { NextPage } from 'next'
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

const SignUpContent: NextPage<Props> = ({ setIsLogin }) => {
  return (
    <LoginContentStyle>
      <LoginBodyStyle>
        <LoginTitleStyle>회원가입</LoginTitleStyle>
        <LoginWithTitleStyle>Yeah-Planner 계정 만들기</LoginWithTitleStyle>
        <LoginWithYeahContainerStyle>
          <LoginInputContainerStyle>
            <LoginInputStyle type="email" placeholder="이메일" />
            <LoginInputStyle type="text" placeholder="이름" />
            <LoginInputStyle type="password" placeholder="비밀번호" />
            <LoginInputStyle type="password" placeholder="비밀번호 확인" />
          </LoginInputContainerStyle>
          <LoginButtonStyle>회원가입</LoginButtonStyle>
        </LoginWithYeahContainerStyle>
        {/* <LoginWithTitleStyle>소셜 계정으로 회원가입</LoginWithTitleStyle>
        <LoginWithSocialContainerStyle>
          Coming Soon
        </LoginWithSocialContainerStyle> */}
      </LoginBodyStyle>
      <CreateAccountStyle>
        <NotHaveAccountStyle>이미 계정이 있으신가요?</NotHaveAccountStyle>
        <SignUpLinkStyle
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setIsLogin(true)
          }}
        >
          로그인
        </SignUpLinkStyle>
      </CreateAccountStyle>
    </LoginContentStyle>
  )
}

export default SignUpContent
