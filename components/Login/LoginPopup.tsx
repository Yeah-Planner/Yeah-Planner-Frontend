import { NextPage } from 'next'

import {
  ExitWrappterStyle,
  ExitWrappterSvgStyle,
  LoginFixedContainerStyle,
  LoginWrapperStyle,
} from './Login.style'

interface Props {
  handleClose: () => void
}

const LoginPopup: NextPage<Props> = ({ handleClose }) => {
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
      </LoginWrapperStyle>
    </LoginFixedContainerStyle>
  )
}

export default LoginPopup
