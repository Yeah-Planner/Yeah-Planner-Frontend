import styled from 'styled-components'

export const FooterStyle = styled.footer`
  text-align: center !important;
  width: 100%;
  padding: 2rem;
  max-width: 1200px;
  min-width: 360px;
  width: calc(100% - 2rem);
  margin: 0 auto;
  margin-top: 17rem;
  /* display: flex; */
  /* justify-content: center; */
`

export const FooterContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterDivStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
`

export const FooterCopyrightStyle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const FooterItemStyle = styled.div`
  margin: 0.2rem 1rem;

  @media (max-width: 768px) {
    margin: 0.2rem 0.5rem;
  }
`

export const FooterLinkStyle = styled.a`
  /* display: block; */
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`
