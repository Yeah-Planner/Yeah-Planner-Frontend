import { NextPage } from 'next'
import { HeaderDropdownStyle } from './Header.style'

interface Props {
  show: boolean
}

const HeaderDropdown: NextPage<Props> = ({ show }) => {
  return show ? <HeaderDropdownStyle></HeaderDropdownStyle> : null
}

export default HeaderDropdown
