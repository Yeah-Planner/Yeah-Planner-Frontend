import styled, { keyframes } from 'styled-components'

export const CalendarContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  border-top: 4px solid #4287f5;
  box-shadow: 0.1px 0.1px 0.4px rgba(0, 0, 0, 0.015),
    0.2px 0.2px 0.9px rgba(0, 0, 0, 0.022),
    0.3px 0.3px 1.5px rgba(0, 0, 0, 0.027),
    0.4px 0.4px 2.3px rgba(0, 0, 0, 0.031),
    0.6px 0.6px 3.3px rgba(0, 0, 0, 0.035),
    0.9px 0.9px 4.6px rgba(0, 0, 0, 0.039),
    1.3px 1.3px 6.5px rgba(0, 0, 0, 0.043),
    1.8px 1.8px 9.5px rgba(0, 0, 0, 0.048),
    2.8px 2.8px 14.6px rgba(0, 0, 0, 0.055), 5px 5px 26px rgba(0, 0, 0, 0.07);
  padding: 2rem;
`

export const DateDisplayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const DateSepStyle = styled.span``

export const DateNumStyle = styled.input`
  width: 4rem;
  text-align: center;
  font-size: 2.5rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid #000;
  }

  @media (max-width: 570px) {
    font-size: 1.5rem;
    width: 2rem;
  }
`

export const YearNumStyle = styled(DateNumStyle)`
  width: 8rem;

  @media (max-width: 570px) {
    width: 4rem;
  }
`

export const NavigateStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavArrowStyle = styled.button`
  background-color: #4287f5;
  border: none;
  width: 3rem;
  height: 2rem;
  font-size: 1.5rem;
  padding-top: 0.25rem;

  &:hover {
    background-color: #3975d4;
    cursor: pointer;
  }

  @media (max-width: 570px) {
    font-size: 1rem;
    width: 2rem;
  }
`

export const NavArrowLeftStyle = styled(NavArrowStyle)`
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
`

export const NavArrowRightStyle = styled(NavArrowStyle)`
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
`

export const NavTodayButtonStyle = styled(NavArrowStyle)`
  margin-left: 2rem;
  font-size: 1.2rem;
  width: 5rem;
  border-radius: 0.2rem;

  @media (max-width: 570px) {
    margin-left: 1rem;
  }
`

export const CalendarTableStyle = styled.table`
  width: 100%;
  /* border: 1px solid #ccc; */
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
`

export const TableHeaderStyle = styled.td`
  border: 1px solid #ccc;
  border-bottom: 2px solid #bbb;
  align-items: center;
  text-align: center;
`

export const TableRowStyle = styled.tr`
  border: none;
  vertical-align: baseline;
`

export const TableDayStyle = styled.td`
  border: 1px solid #ccc;
  height: 8rem;

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`

export const TableDayDisalbedStyle = styled(TableDayStyle)`
  color: #ccc;

  &:hover {
    background-color: transparent;
    cursor: default;
  }
`

export const TableDayNumStyle = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 0 0.25rem;
`

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

export const DayPopupStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem 2rem;
  z-index: 50;
  width: 300px;
  height: 500px;
  animation: 0.2s ease-in-out 0s 1 normal forwards running ${showAnimation};
  box-shadow: 0.2px 0.2px 1.2px rgba(0, 0, 0, 0.015),
    0.3px 0.3px 2.7px rgba(0, 0, 0, 0.022),
    0.6px 0.6px 4.6px rgba(0, 0, 0, 0.027),
    0.9px 0.9px 6.9px rgba(0, 0, 0, 0.031),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    1.8px 1.8px 14.2px rgba(0, 0, 0, 0.039),
    2.5px 2.5px 20.1px rgba(0, 0, 0, 0.043),
    3.7px 3.7px 29.2px rgba(0, 0, 0, 0.048),
    5.6px 5.6px 45px rgba(0, 0, 0, 0.055), 10px 10px 80px rgba(0, 0, 0, 0.07);
  pointer-events: painted;
`

export const DayPopupBackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 49;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`
