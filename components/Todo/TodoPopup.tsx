import { NextPage } from 'next'
import { useState } from 'react'
import { TodoItem } from '../../pages/todo'
import {
  CompletePopupTagStyle,
  OnPopupTagStyle,
  TodoExitContainerStyle,
  TodoExitSvgStyle,
  TodoPopupBackgroundStyle,
  TodoPopupDeadlineInputStyle,
  TodoPopupDeadlineStyle,
  TodoPopupDeadlineTitleStyle,
  TodoPopupStyle,
  TodoPopupTitleStyle,
} from './Todo.style'

interface Props {
  show: boolean
  item: TodoItem
  close(): void
  toggleTodo(id: string): void
  editTitle(id: string, title: string): void
  editDeadline(id: string, deadline: string): void
  editContent(id: string, content: string): void
}

const TodoPopup: NextPage<Props> = ({
  show,
  item: { id, title, completed, content: description, deadline },
  close,
  toggleTodo,
  editTitle,
  editDeadline,
  editContent,
}) => {
  const [titleValue, setTitleValue] = useState(title)
  const [deadlineValue, setDeadlineValue] = useState(deadline)

  return show ? (
    <>
      <TodoPopupBackgroundStyle
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          close()
        }}
      />
      <TodoPopupStyle>
        <TodoExitContainerStyle>
          <TodoExitSvgStyle
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              close()
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </TodoExitSvgStyle>
        </TodoExitContainerStyle>
        <TodoPopupTitleStyle
          value={titleValue}
          onChange={e => {
            setTitleValue(e.target.value)
          }}
          onBlur={e => {
            if (!titleValue) setTitleValue('제목 없음')
            editTitle(id, titleValue || '제목 없음')
          }}
        />
        {completed ? (
          <CompletePopupTagStyle
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              toggleTodo(id)
            }}
          >
            완료
          </CompletePopupTagStyle>
        ) : (
          <OnPopupTagStyle
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              toggleTodo(id)
            }}
          >
            진행 중
          </OnPopupTagStyle>
        )}
        <TodoPopupDeadlineStyle>
          <TodoPopupDeadlineTitleStyle>기한</TodoPopupDeadlineTitleStyle>
          <TodoPopupDeadlineInputStyle
            value={deadlineValue}
            onChange={e => {
              setDeadlineValue(e.target.value)
            }}
            onBlur={e => {
              editDeadline(id, deadlineValue)
            }}
            placeholder="기한이 지정되지 않았습니다."
          />
        </TodoPopupDeadlineStyle>
      </TodoPopupStyle>
    </>
  ) : null
}

export default TodoPopup
