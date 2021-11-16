import { NextPage } from 'next'
import {
  HeaderContentStyle,
  HeaderLogoLinkStyle,
  HeaderLogoStyle,
  HeaderStyle,
} from './Header.style'

const Header: NextPage = () => {
  return (
    <HeaderStyle>
      <HeaderContentStyle>
        <HeaderLogoStyle>
          <HeaderLogoLinkStyle href="/">
            <a>Yeah-Planner</a>
          </HeaderLogoLinkStyle>
        </HeaderLogoStyle>
        <div>test</div>
      </HeaderContentStyle>
    </HeaderStyle>
  )
}

export default Header
