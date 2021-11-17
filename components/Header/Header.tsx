import { NextPage } from 'next'
import Link from 'next/link'
import {
  HeaderContentStyle,
  HeaderLoginBtnStyle,
  HeaderLogoLinkStyle,
  HeaderLogoStyle,
  HeaderStyle,
} from './Header.style'

interface Props {
  login: boolean
}

const Header: NextPage<Props> = ({ login }) => {
  return (
    <HeaderStyle>
      <HeaderContentStyle>
        <HeaderLogoStyle>
          <Link href="/" passHref>
            <HeaderLogoLinkStyle>Yeah-Planner</HeaderLogoLinkStyle>
          </Link>
        </HeaderLogoStyle>
        {login ? (
          <div>logout</div>
        ) : (
          <HeaderLoginBtnStyle>Login</HeaderLoginBtnStyle>
        )}
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

export default Header
