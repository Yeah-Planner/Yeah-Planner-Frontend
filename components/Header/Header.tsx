import { NextPage } from 'next'
import Link from 'next/link'
import { createRef, useState } from 'react'
import LoginPopup from '../Login/LoginPopup'
import {
  HeaderContentStyle,
  HeaderLoginBtnStyle,
  HeaderLogoLinkStyle,
  HeaderLogoStyle,
  HeaderStyle,
} from './Header.style'
import HeaderProfile from './HeaderProfile'

interface Props {
  login: boolean
  setLogin(v: boolean): void
}

const Header: NextPage<Props> = ({ login, setLogin }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)

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
            {showLoginPopup && <LoginPopup />}
          </>
        )}
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

export default Header
