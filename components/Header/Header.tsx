import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import LoginPopup from './Popup'
import {
  HeaderContentStyle,
  HeaderLoginBtnStyle,
  HeaderLogoLinkStyle,
  HeaderLogoStyle,
  HeaderStyle,
} from './Header.style'
import HeaderProfile from './HeaderProfile'
// import Cookies from 'cookies'

interface Props {
  login: boolean
}

const Header: NextPage<Props> = ({ login }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <HeaderStyle>
      <HeaderContentStyle>
        <HeaderLogoStyle>
          <Link href="/" passHref>
            <HeaderLogoLinkStyle>Yeah-Planner</HeaderLogoLinkStyle>
          </Link>
        </HeaderLogoStyle>
        {login ? (
          <HeaderProfile />
        ) : (
          <>
            <HeaderLoginBtnStyle
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                setShowLoginPopup(true)
              }}
            >
              로그인
            </HeaderLoginBtnStyle>
            {showLoginPopup && (
              <LoginPopup
                handleClose={() => setShowLoginPopup(false)}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
            )}
          </>
        )}
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

// Header.getInitialProps = async ({ req, res }) => {
//   if (!req) {
//     return { login: false }
//   }

//   const cookies = new Cookies(req, res!)
//   const login = cookies.get('login')
//   console.log(login)
//   return {
//     login: true,
//   }
// }

export default Header
