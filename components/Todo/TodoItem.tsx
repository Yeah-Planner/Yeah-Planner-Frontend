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
} from './Todo.style'

interface Props {
  item: TodoItem
  removeTodo(id: string): void
  toggleTodo(id: string): void
}

const TodoItemComponent: NextPage<Props> = ({
  item: { id, title, completed, description, deadline },
  removeTodo,
  toggleTodo,
}) => {
  return (
    <TodoItemStyle>
      <div>
        {completed ? (
          <CompletedTagStyle>완료</CompletedTagStyle>
        ) : (
          <OnTagStyle>진행 중</OnTagStyle>
        )}
        <TodoTitleStyle done={completed}>{title}</TodoTitleStyle>
      </div>
      <div>
        <TodoToggleStyle
          type="checkbox"
          defaultChecked={completed}
          // readOnly
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
  )
}

export default TodoItemComponent
