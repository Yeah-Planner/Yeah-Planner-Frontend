import Link from 'next/link'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

export const HeaderContentStyle = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 2rem);
`

export const HeaderLogoStyle = styled.h1`
  font-size: 1.5rem;
`

export const HeaderLogoLinkStyle = styled(Link)`
  text-decoration: none;
  color: #000;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #000;
  }
`
