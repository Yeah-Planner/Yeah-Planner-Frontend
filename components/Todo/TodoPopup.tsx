import { NextPage } from 'next'
import { TodoItem } from '../../pages/todo'
import { TodoPopupBackgroundStyle, TodoPopupStyle } from './Todo.style'

interface Props {
  show: boolean
  item: TodoItem
  close(): void
}

const TodoPopup: NextPage<Props> = ({ show, item, close }) => {
  return show ? (
    <>
      <TodoPopupBackgroundStyle
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          close()
        }}
      />
      <TodoPopupStyle></TodoPopupStyle>
    </>
  ) : null
}

export default TodoPopup
