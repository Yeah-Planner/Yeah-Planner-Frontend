import { NextPage } from 'next'
import { TodoItem } from '../../pages/todo'
import {
  TodoContainerStyle,
  TodoItemContainerStyle,
  TodoPageTitleStyle,
} from './Todo.style'
import TodoItemComponent from './TodoItem'

interface Props {
  todo: TodoItem[]
}

const TodoContainer: NextPage<Props> = ({ todo }) => {
  return (
    <TodoContainerStyle>
      <TodoPageTitleStyle>할 일 목록</TodoPageTitleStyle>
      <TodoItemContainerStyle>
        {todo.map(item => (
          <TodoItemComponent key={item.id} item={item} />
        ))}
      </TodoItemContainerStyle>
    </TodoContainerStyle>
  )
}

export default TodoContainer
