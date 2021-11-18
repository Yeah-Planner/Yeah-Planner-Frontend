import styled, { keyframes } from 'styled-components'

const showAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75)
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1)
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
`

export const LoginFixedContainerStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginWrapperStyle = styled.div`
  background: #fff;
  animation: 0.4s ease-in-out 0s 1 normal forwards running ${showAnimation};
  width: 360px;
  height: 512px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`

export const ExitWrappterStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: rgb(134, 142, 150);
  margin-bottom: 2.25rem;
`

export const ExitWrappterSvgStyle = styled.svg`
  cursor: pointer;
  stroke: currentColor;
  fill: currentColor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`

export const LoginTitleStyle = styled.h2`
  font-size: 1.4rem;
`

export const LoginWithTitleStyle = styled.h4`
  margin: 1rem 0;
  color: rgb(134, 142, 150);
`

export const LoginWithYeahContainerStyle = styled.div`
  margin-bottom: 2rem;
  display: flex;
`

export const LoginInputContainerStyle = styled.div`
  flex: 1 1 0;
`

export const LoginInputStyle = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.75rem;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid rgb(222, 226, 230);
`

export const LoginButtonStyle = styled.button`
  width: 5rem;
  font-size: 1rem;
  border: 1px solid rgb(222, 226, 230);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  background: rgb(18, 184, 134);
  color: white;
  font-weight: bold;

  &:hover {
    background: rgb(33, 194, 145);
  }
`

export const LoginWithSocialContainerStyle = styled.div`
  height: 48px;
`

export const LoginContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  height: 100%;
`

export const LoginBodyStyle = styled.div``

export const CreateAccountStyle = styled.div`
  text-align: right;
`

export const NotHaveAccountStyle = styled.span`
  margin-right: 0.25rem;
`

export const SignUpLinkStyle = styled.div`
  cursor: pointer;
  color: rgb(18, 184, 134);
  font-weight: bold;
  display: inline;

  &:hover {
    text-decoration: underline;
  }
`
