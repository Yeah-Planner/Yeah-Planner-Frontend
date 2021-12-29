import { NextPage } from 'next'
import { TodoItem } from '../../pages/todo'
import { TodoItemStyle } from './Todo.style'

interface Props {
  item: TodoItem
}

const TodoItemComponent: NextPage<Props> = ({
  item: { id, title, completed, description, deadline },
}) => {
  return <TodoItemStyle>{title}</TodoItemStyle>
}

export default TodoItemComponent
