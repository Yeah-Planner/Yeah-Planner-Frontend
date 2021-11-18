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
  animation: 0.4s ease-in-out 0s 1 normal forwards running ${showAnimation};
  width: 606px;
  height: 480px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  display: flex;
`
