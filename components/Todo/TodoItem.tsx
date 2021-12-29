import { NextPage } from 'next'
import { TodoItem } from '../../pages/todo'
import { CompletedTagStyle, OnTagStyle, TodoItemStyle } from './Todo.style'

interface Props {
  item: TodoItem
}

const TodoItemComponent: NextPage<Props> = ({
  item: { id, title, completed, description, deadline },
}) => {
  return (
    <TodoItemStyle>
      <div>
        {completed ? (
          <CompletedTagStyle>완료</CompletedTagStyle>
        ) : (
          <OnTagStyle>진행 중</OnTagStyle>
        )}
        {title}
      </div>
      <div>수정 삭제</div>
    </TodoItemStyle>
  )
}

export default TodoItemComponent
