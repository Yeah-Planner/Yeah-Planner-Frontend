import { NextPage } from 'next'
import Link from 'next/link'
import {
  HeaderContentStyle,
  HeaderLoginBtn,
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
          <Link href="/">
            <HeaderLogoLinkStyle>Yeah-Planner</HeaderLogoLinkStyle>
          </Link>
        </HeaderLogoStyle>
        {login ? <div>logout</div> : <HeaderLoginBtn>Login</HeaderLoginBtn>}
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

export default Header
