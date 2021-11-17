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

export const HeaderLogoLinkStyle = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  user-select: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #000;
  }
`

export const HeaderLoginBtnStyle = styled.button`
  background-color: #fff;
  color: black;
  font-size: 1rem;
  height: 2rem;
  padding: 0 1rem;
  font-weight: bold;
  border-radius: 1rem;
  outline: none;
  border: 2px solid black;
  word-break: keep-all;
  transition: all 0.125s ease-in 0s;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`
