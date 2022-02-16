import styled from 'styled-components'

export const IndexContainerStyle = styled.div`
  text-align: center !important;
  margin-top: 17rem;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`

export const MainSloganStyle = styled.h1`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const MainSubSloganStyle = styled.h2`
  margin-top: -2rem;
  font-size: 1.8rem;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 0;
  }
`

export const TodoContainerStyle = styled.div`
  margin-top: 40vh;
  width: 100%;
  text-align: left;
`

export const TodoDescTitleStyle = styled.h2`
  font-size: 2.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const TodoDescContainerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TodoDescItemStyle = styled.div`
  width: 100%;
  padding: 1rem;
`

export const TodoImageStyle = styled.img`
  width: 100%;
  height: auto;
`

export const TodoItemTitleStyle = styled.h3`
  font-size: 1.8rem;
`

export const TodoArticleStyle = styled.p`
  font-size: 1.4rem;
`

export const ToBeContinueStyle = styled.div`
  width: 100%;
  text-align: center;
  margin: 10rem 0;
  font-size: 3.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`
