import { NextPage } from 'next'
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
}

const TodoContainer: NextPage<Props> = ({ todo }) => {
  return (
    <TodoContainerStyle>
      <TodoPageTitleStyle>할 일 목록</TodoPageTitleStyle>
      <TodoAddFormStyle>
        <TodoAddFormInputStyle placeholder="할 일 추가하기" />
        <TodoAddFormButtonStyle>추가</TodoAddFormButtonStyle>
      </TodoAddFormStyle>
      <TodoItemContainerStyle>
        {todo.map(item => (
          <TodoItemComponent key={item.id} item={item} />
        ))}
      </TodoItemContainerStyle>
    </TodoContainerStyle>
  )
}

export default TodoContainer
