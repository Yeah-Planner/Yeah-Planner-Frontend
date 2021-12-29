import styled from 'styled-components'

export const TodoContainerStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`

export const TodoPageTitleStyle = styled.h1`
  display: block;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`

export const TodoItemContainerStyle = styled.div`
  width: 100%;
  /* border: 1px solid #ccc; */
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  min-height: 4rem;
`

export const TodoItemStyle = styled.div`
  height: 4rem;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.25rem;
  box-sizing: border-box;
  font-weight: 600;

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
