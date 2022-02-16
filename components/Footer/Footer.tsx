import { NextPage } from 'next'
import Link from 'next/link'
import {
  FooterContentStyle,
  FooterCopyrightStyle,
  FooterDivStyle,
  FooterItemStyle,
  FooterLinkStyle,
  FooterStyle,
} from './Footer.style'

const Footer: NextPage = () => {
  return (
    <FooterStyle>
      <FooterContentStyle>
        <FooterDivStyle>
          <Link href="/" passHref>
            <FooterLinkStyle>About</FooterLinkStyle>
          </Link>
          <Link href="/" passHref>
            <FooterLinkStyle>Terms of Service</FooterLinkStyle>
          </Link>
          <Link href="/" passHref>
            <FooterLinkStyle>Privacy</FooterLinkStyle>
          </Link>
          <Link href="/" passHref>
            <FooterLinkStyle>Contact</FooterLinkStyle>
          </Link>
        </FooterDivStyle>
        <FooterCopyrightStyle>
          <FooterItemStyle>2021-2022 &copy; Yeah Planner</FooterItemStyle>
          <FooterItemStyle>developerstarlight@gmail.com</FooterItemStyle>
        </FooterCopyrightStyle>
      </FooterContentStyle>
    </FooterStyle>
  )
}

export default Footer
