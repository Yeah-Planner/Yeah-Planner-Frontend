import { NextPage } from 'next'
import { RefObject } from 'react'

import { LoginFixedContainerStyle, LoginWrapperStyle } from './Login.style'

interface Props {}

const LoginPopup: NextPage<Props> = () => {
  return (
    <LoginFixedContainerStyle>
      <LoginWrapperStyle></LoginWrapperStyle>
    </LoginFixedContainerStyle>
  )
}

export default LoginPopup
