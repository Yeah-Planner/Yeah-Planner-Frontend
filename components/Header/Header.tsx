import { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`

const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 2rem);
  @media (max-width: 960px) {
    width: calc(960px - 2rem);
  }
  @media (max-width: 768px) {
    width: calc(768px - 2rem);
  }
`

const Header: NextPage = () => {
  return (
    <Container>
      <Content>Header</Content>
    </Container>
  )
}

export default Header
