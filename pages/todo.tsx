import { createHash } from 'crypto'
import { NextPage } from 'next'
import { useState } from 'react'
import TodoContainer from '../components/Todo/TodoContainer'

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
      .update(title + Date.now())
      .digest('hex')
    setTodo([...todo, { id, title, completed: false, description: '' }])
  }

  return <TodoContainer todo={todo} addTodo={addTodo} />
}

export default TodoPage
