import { NextPage } from 'next'
import { useState } from 'react'
import {
  HeaderProfileContainerStyle,
  HeaderProfileDropdownButtnSvgStyle,
  HeaderProfileImgStyle,
} from './Header.style'
import HeaderDropdown from './HeaderDropdown'
import defaultImage from './profile.png'

interface Props {}

const HeaderProfile: NextPage<Props> = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <HeaderProfileContainerStyle onClick={() => setShowDropdown(!showDropdown)}>
      <HeaderDropdown
        show={showDropdown}
        handleHide={() => setShowDropdown(false)}
      />
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
