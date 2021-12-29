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
  height: 2.5rem;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  box-sizing: border-box;

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

export const TodoAddFormStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const TodoAddFormInputStyle = styled.input`
  width: 90%;
  height: 4rem;
  padding: 1rem;
  border: none;
  /* border-bottom: 3px solid #ccc; */
  font-size: 1.25rem;
  font-weight: 600;
  box-sizing: border-box;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }
`

export const TodoAddFormButtonStyle = styled.button`
  height: 4rem;
  width: 10%;
  font-size: 1rem;
  border: 1px solid rgb(222, 226, 230);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  background: #afc8f0;
  font-weight: bold;

  &:hover {
    background: #b5caec;
  }
`

export const OnTagStyle = styled.span`
  background-color: #abff95;
  height: 2.5rem;
  border-radius: 2.5rem;
  padding: 0.2rem;
  box-sizing: border-box;
  margin-right: 0.5rem;
`

export const CompletedTagStyle = styled.span`
  background-color: #f78e8e;
  height: 2.5rem;
  border-radius: 2.5rem;
  padding: 0.2rem;
  box-sizing: border-box;
  margin-right: 0.5rem;
`
