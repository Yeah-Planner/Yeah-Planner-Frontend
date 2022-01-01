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
  min-height: 2.5rem;
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
  min-width: 5rem;

  &:hover {
    background: #b5caec;
  }
`

export const OnTagStyle = styled.span`
  background-color: #abff95;
  display: block;
  width: 80px;
  box-sizing: border-box;
  height: 2rem;
  border-radius: 2.5rem;
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.8rem;
  overflow: hidden;
`

export const CompletedTagStyle = styled.span`
  background-color: #dc143c;
  display: block;
  width: 80px;
  box-sizing: border-box;
  height: 2rem;
  border-radius: 2.5rem;
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.8rem;
  overflow: hidden;
`

export const TodoRemoveStyle = styled.span`
  cursor: pointer;
  font-size: 1rem;
  color: #727070;

  &:hover {
    color: #000;
  }
`

export const TodoTitleStyle = styled.span<{ done: boolean }>`
  display: block;
  font-size: 1.1rem;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${({ done }) =>
    done &&
    `
      text-decoration: line-through;
      color: #6b6b6b;
      font-style: italic;
    `}
`

export const TodoTitleContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 2.5rem;
  line-height: 2.5rem;
  align-items: center;
`

export const TodoToggleStyle = styled.input`
  margin-right: 0.5rem;
  width: 0.9rem;
`

export const TodoPopupBackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
`

export const TodoPopupStyle = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 1200px;
  min-width: 350px;
  width: calc(100% - 4rem);
  min-height: 500px;
  height: calc(100% - 10rem);
  z-index: 100;
  background-color: white;
  top: 5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1rem 2rem;
  box-sizing: border-box;
`

export const TodoExitContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const TodoExitSvgStyle = styled.svg`
  cursor: pointer;
  stroke: currentColor;
  fill: currentColor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`

export const TodoPopupTitleStyle = styled.input`
  word-break: break-all;
  font-size: 2rem;
  font-weight: bold;
  width: 95%;
  border: none;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
  }
`

export const CompletePopupTagStyle = styled(CompletedTagStyle)`
  cursor: pointer;
`

export const OnPopupTagStyle = styled(OnTagStyle)`
  cursor: pointer;
`

export const TodoPopupDeadlineStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
`

export const TodoPopupDeadlineTitleStyle = styled.div`
  margin-right: 1rem;
  border: none;
  font-size: 1.25rem;
  width: 10%;
  min-width: 2.5rem;
`

export const TodoPopupDeadlineInputStyle = styled.input`
  width: 90%;
  border: none;
  font-size: 1.25rem;

  &:focus {
    outline: none;
  }
`
