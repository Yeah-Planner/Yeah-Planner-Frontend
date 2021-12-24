import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { getUser } from '../../storage/storage'
import { HeaderDropdownItemStyle, HeaderDropdownStyle } from './Header.style'

interface Props {
  show: boolean
}

const HeaderDropdown: NextPage<Props> = ({ show }) => {
  const router = useRouter()
  const handleClick = (to: string) => (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    // e.stopPropagation()
    router.push(to)
  }

  return show ? (
    <HeaderDropdownStyle>
      <HeaderDropdownItemStyle
        separator
        onClick={handleClick(`/user/${getUser()?.uuid}`)}
      >
        내 프로필
      </HeaderDropdownItemStyle>
      <HeaderDropdownItemStyle onClick={handleClick(`/logout`)}>
        로그아웃
      </HeaderDropdownItemStyle>
    </HeaderDropdownStyle>
  ) : null
}

export default HeaderDropdown
