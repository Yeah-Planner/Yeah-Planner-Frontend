import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  CreateAccountStyle,
  ExitWrappterStyle,
  ExitWrappterSvgStyle,
  LoginBodyStyle,
  LoginButtonStyle,
  LoginContentStyle,
  LoginFixedContainerStyle,
  LoginInputContainerStyle,
  LoginInputStyle,
  LoginTitleStyle,
  LoginWithSocialContainerStyle,
  LoginWithTitleStyle,
  LoginWithYeahContainerStyle,
  LoginWrapperStyle,
  NotHaveAccountStyle,
  SignUpLinkStyle,
} from './Login.style'

interface Props {
  handleClose: () => void
}

const LoginPopup: NextPage<Props> = ({ handleClose }) => {
  const router = useRouter()

  return (
    <LoginFixedContainerStyle>
      <LoginWrapperStyle>
        <ExitWrappterStyle>
          <ExitWrappterSvgStyle
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              handleClose()
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </ExitWrappterSvgStyle>
        </ExitWrappterStyle>
        <LoginContentStyle>
          <LoginBodyStyle>
            <LoginTitleStyle>로그인</LoginTitleStyle>
            <LoginWithTitleStyle>
              Yeah-Planner 계정으로 로그인
            </LoginWithTitleStyle>
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
                handleClose()
                router.push('/auth/signup')
              }}
            >
              회원가입
            </SignUpLinkStyle>
          </CreateAccountStyle>
        </LoginContentStyle>
      </LoginWrapperStyle>
    </LoginFixedContainerStyle>
  )
}

export default LoginPopup
