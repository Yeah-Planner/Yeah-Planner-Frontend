import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100vw;
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

export const HeaderProfileContainerStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const HeaderProfileImgStyle = styled(Image)`
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: rgba(0 0 0 / 9%) 0 0 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
`

export const HeaderProfileDropdownButtnSvgStyle = styled.svg`
  font-size: 1.5rem;
  margin-left: 0.25rem;
  color: rgba(134, 142, 150);
  transition: all 0.125s ease-in 0s;
  margin-right: -0.4375rem;
  stroke: currentColor;
  fill: currentColor;
  stroke-width: 0;
  width: 1rem;
  height: 1rem;
`

const dropdownShowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1, 0)
  }
  50% {
    opacity: 1;
    transform: scale(1, 0.9)
  }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`

export const HeaderDropdownStyle = styled.div`
  position: absolute;
  top: 4rem;

  left: calc(100% - 2rem - 15rem);
  @media (min-width: 1200px) {
    left: calc(50% + 600px - 15rem);
  }

  max-width: 15rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  transform-origin: 100% 0;
  animation: 0.2s ease-in-out 0s 1 normal forwards running
    ${dropdownShowAnimation};
`

interface DropDownItemProps {
  separator?: boolean
}

export const HeaderDropdownItemStyle = styled.div<DropDownItemProps>`
  cursor: pointer;
  width: 100%;
  height: 40px;
  padding-left: 1rem;
  line-height: 40px;
  overflow: hidden;
  box-sizing: border-box;
  border: none;

  ${({ separator }) => separator && 'border-bottom: 1.5px solid #a5a5a5;'}

  &:hover {
    background-color: #f5f5f5;
  }

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`

const backgroundShowAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const DropdownBackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;
  cursor: default;
  animation: 0.2s ease-in-out 0s 1 normal forwards running
    ${backgroundShowAnimation};
`
