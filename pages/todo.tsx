import { createHash } from 'crypto'
import { NextPage } from 'next'
import { useState } from 'react'
import TodoContainer from '../components/Todo/TodoContainer'
import { getUser } from '../storage/storage'

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  description: string
  deadline?: Date
}

const TodoPage: NextPage<{}> = () => {
  const [todo, setTodo] = useState<TodoItem[]>([])

  const addTodo = (title: string) => {
    if (!title.trim()) return

    const id = createHash('sha256')
      .update(title + Date.now() + getUser()?.uuid)
      .digest('hex')
    setTodo([...todo, { id, title, completed: false, description: '' }])
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

  return (
    <TodoContainer
      todo={todo}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  )
}

export default TodoPage
