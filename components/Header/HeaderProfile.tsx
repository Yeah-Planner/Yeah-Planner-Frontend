import { NextPage } from 'next'
import {
  HeaderProfileContainerStyle,
  HeaderProfileDropdownButtnSvgStyle,
  HeaderProfileImgStyle,
} from './Header.style'

interface Props {}

const HeaderProfile: NextPage<Props> = () => {
  return (
    <HeaderProfileContainerStyle>
      <HeaderProfileImgStyle
        src="https://media.vlpt.us/profiles/5tarlight/thumbnails/1553600129.869.png?w=120"
        alt="profile"
      />
      <HeaderProfileDropdownButtnSvgStyle
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10l5 5 5-5z" />
      </HeaderProfileDropdownButtnSvgStyle>
    </HeaderProfileContainerStyle>
  )
}

export default HeaderProfile
