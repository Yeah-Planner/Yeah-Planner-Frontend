import { NextPage } from 'next'
import { TodoItem } from '../../pages/todo'
import { TodoContainerStyle, TodoPageTitleStyle } from './Todo.style'

interface Props {
  todo: TodoItem[]
}

const TodoContainer: NextPage<Props> = ({ todo }) => {
  return (
    <TodoContainerStyle>
      <TodoPageTitleStyle>할 일 목록</TodoPageTitleStyle>
    </TodoContainerStyle>
  )
}

export default TodoContainer
