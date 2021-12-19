import { NextPage } from 'next'
import {
  HeaderProfileContainerStyle,
  HeaderProfileDropdownButtnSvgStyle,
  HeaderProfileImgStyle,
} from './Header.style'
import defaultImage from './profile.png'

interface Props {}

const HeaderProfile: NextPage<Props> = () => {
  return (
    <HeaderProfileContainerStyle>
      <HeaderProfileImgStyle
        src={defaultImage}
        alt="profile"
        width={45}
        height={45}
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
