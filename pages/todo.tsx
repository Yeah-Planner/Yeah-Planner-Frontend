import { createHash } from 'crypto'
import { NextPage } from 'next'
import { useState } from 'react'
import TodoContainer from '../components/Todo/TodoContainer'
import { getUser } from '../storage/storage'

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  content: string
  deadline: string
}

const TodoPage: NextPage<{}> = () => {
  const [todo, setTodo] = useState<TodoItem[]>([])

  const addTodo = (title: string) => {
    if (!title.trim()) return

    const id = createHash('sha256')
      .update(title + Date.now() + getUser()?.uuid)
      .digest('hex')
    setTodo([
      ...todo,
      { id, title, completed: false, content: '', deadline: '' },
    ])
  }
  const removeTodo = (id: string) => {
    setTodo(todo.filter(item => item.id !== id))
  }
  const toggleTodo = (id: string) => {
    setTodo(
      todo.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }
  const editTitle = (id: string, title: string) => {
    setTodo(
      todo.map(item => {
        if (item.id === id) {
          return { ...item, title }
        }
        return item
      })
    )
  }
  const editDeadline = (id: string, deadline: string) => {
    setTodo(
      todo.map(item => {
        if (item.id === id) {
          return { ...item, deadline }
        }
        return item
      })
    )
  }
  const editContent = (id: string, content: string) => {
    setTodo(
      todo.map(item => {
        if (item.id === id) {
          return { ...item, content }
        }
        return item
      })
    )
  }

  return (
    <TodoContainer
      todo={todo}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
      editTitle={editTitle}
      editDeadline={editDeadline}
      editContent={editContent}
    />
  )
}

export default TodoPage
