import styled from 'styled-components'

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
