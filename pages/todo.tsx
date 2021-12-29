import { createHash } from 'crypto'
import { NextPage } from 'next'
import TodoContainer from '../components/Todo/TodoContainer'

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  description: string
  deadline?: Date
}

const TodoPage: NextPage<{}> = () => {
  const tempTodo: TodoItem[] = [
    {
      id: createHash('sha256').update(new Date().toString()).digest('hex'),
      title: '어쩌구',
      completed: false,
      description: '설명',
    },
  ]

  return <TodoContainer todo={tempTodo} />
}

export default TodoPage
