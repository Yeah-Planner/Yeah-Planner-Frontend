import { NextPage } from 'next'
import Link from 'next/link'
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
          <HeaderLoginBtnStyle
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              setLogin(true)
            }}
          >
            로그인
          </HeaderLoginBtnStyle>
        )}
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

export default Header
