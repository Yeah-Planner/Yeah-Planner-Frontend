import styled from 'styled-components'

export const DateDisplayStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const YearNumStyle = styled(DateNumStyle)`
  width: 8rem;
`
