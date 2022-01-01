import { NextPage } from 'next'
import { useState } from 'react'
import { TodoItem } from '../../pages/todo'
import {
  TodoAddFormButtonStyle,
  TodoAddFormInputStyle,
  TodoAddFormStyle,
  TodoContainerStyle,
  TodoItemContainerStyle,
  TodoPageTitleStyle,
} from './Todo.style'
import TodoItemComponent from './TodoItem'

interface Props {
  todo: TodoItem[]
  addTodo(title: string): void
  removeTodo(id: string): void
  toggleTodo(id: string): void
  editTitle(id: string, title: string): void
}

const TodoContainer: NextPage<Props> = ({
  todo,
  addTodo,
  removeTodo,
  toggleTodo,
  editTitle,
}) => {
  const [input, setInput] = useState('')

  return (
    <TodoContainerStyle>
      <TodoPageTitleStyle>할 일 목록</TodoPageTitleStyle>
      <TodoAddFormStyle>
        <TodoAddFormInputStyle
          placeholder="할 일 추가하기"
          value={input}
          onChange={({ target: { value } }) => {
            setInput(value)
          }}
          onKeyPress={({ key }) => {
            if (key === 'Enter') {
              addTodo(input)
              setInput('')
            }
          }}
        />
        <TodoAddFormButtonStyle
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            addTodo(input)
            setInput('')
          }}
        >
          추가
        </TodoAddFormButtonStyle>
      </TodoAddFormStyle>
      <TodoItemContainerStyle>
        {todo.map(item => (
          <TodoItemComponent
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTitle={editTitle}
          />
        ))}
      </TodoItemContainerStyle>
    </TodoContainerStyle>
  )
}

export default TodoContainer
