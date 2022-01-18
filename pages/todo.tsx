import axios from 'axios'
import { createHash } from 'crypto'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import TodoContainer from '../components/Todo/TodoContainer'
import { getUser } from '../storage/storage'
import { backend } from '../util/util'

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  content: string
  deadline: string
}

const TodoPage: NextPage = () => {
  const [todo, setTodo] = useState<TodoItem[]>([])

  useEffect(() => {
    ;(async () => {
      const user = getUser()
      if (!user) return
      const { data } = await axios.post<TodoItem[]>(`${backend()}/todo/get`, {
        owner: user.uuid,
      })
      setTodo(data)
    })()
  }, [])

  const addTodo = (title: string) => {
    if (!title.trim()) return
    const user = getUser()
    if (!user) return

    const id = createHash('sha256')
      .update(title + Date.now() + getUser()?.uuid)
      .digest('hex')

    const f = async () => {
      await axios.post<TodoItem>(`${backend()}/todo/create`, {
        title,
        id,
        owner: user.uuid,
      })
    }
    f()

    setTodo([
      ...todo,
      { id, title, completed: false, content: '', deadline: '' },
    ])
  }
  const removeTodo = (id: string) => {
    const user = getUser()
    if (!user) return

    const f = async () => {
      await axios.post(`${backend()}/todo/delete`, {
        id,
        owner: user.uuid,
      })
    }
    f()

    setTodo(todo.filter(item => item.id !== id))
  }

  const updateTodo = async (
    id: string,
    update: 'title' | 'content' | 'deadline' | 'completed',
    value: string | boolean
  ) => {
    if (update === 'completed' && typeof value !== 'boolean') return
    if (update !== 'completed' && typeof value === 'boolean') return

    const user = getUser()
    if (!user) return

    await axios.post(`${backend()}/todo/update`, {
      owner: user.uuid,
      id,
      data: {
        update,
        value,
      },
    })
  }

  const toggleTodo = (id: string) => {
    updateTodo(id, 'completed', !todo.find(item => item.id === id)?.completed)

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
    updateTodo(id, 'title', title)
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
    updateTodo(id, 'deadline', deadline)
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
    updateTodo(id, 'content', content)
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

// export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
//   const todoRes = await axios.post<TodoItem[]>(`${backend}/todo/get`, {
//     // owner: getUser()?.uuid,
//     owner: '123',
//   })
//   console.log(todoRes.status)
//   // TODO: save session in cookie and return redirect if not logged in

//   return {
//     props: {
//       todo: todoRes.data,
//     },
//   }
// }
