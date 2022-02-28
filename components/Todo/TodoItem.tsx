import { NextPage } from 'next'
import { useState } from 'react'
import { TodoItem } from '../../pages/todo'
import {
  CompletedTagStyle,
  OnTagStyle,
  TodoRemoveStyle,
  TodoItemStyle,
  TodoTitleStyle,
  TodoToggleStyle,
  TodoTitleContainerStyle,
} from './Todo.style'
import TodoPopup from './TodoPopup'

interface Props {
  item: TodoItem
  removeTodo(id: string): void
  toggleTodo(id: string): void
  editTitle(id: string, title: string): void
  editDeadline(id: string, deadline: string): void
  editContent(id: string, content: string): void
}

const TodoItemComponent: NextPage<Props> = ({
  item,
  item: { id, title, completed },
  removeTodo,
  toggleTodo,
  editTitle,
  editDeadline,
  editContent,
}) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <TodoItemStyle
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          setShow(true)
        }}
      >
        <TodoTitleContainerStyle>
          {completed ? (
            <CompletedTagStyle>완료</CompletedTagStyle>
          ) : (
            <OnTagStyle>진행 중</OnTagStyle>
          )}
          <TodoTitleStyle done={completed}>{title}</TodoTitleStyle>
        </TodoTitleContainerStyle>
        <div>
          <TodoToggleStyle
            type="checkbox"
            readOnly
            checked={completed}
            onClick={e => {
              e.stopPropagation()
              // e.preventDefault()
              toggleTodo(id)
            }}
          />
          <TodoRemoveStyle
            onClick={e => {
              e.stopPropagation()
              e.preventDefault()
              removeTodo(id)
            }}
          >
            삭제
          </TodoRemoveStyle>
        </div>
      </TodoItemStyle>
      {show ? (
        <TodoPopup
          item={item}
          close={() => setShow(false)}
          toggleTodo={toggleTodo}
          editTitle={editTitle}
          editContent={editContent}
          editDeadline={editDeadline}
        />
      ) : null}
    </>
  )
}

export default TodoItemComponent
