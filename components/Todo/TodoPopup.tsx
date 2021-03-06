import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { TodoItem } from '../../pages/todo'
import {
  CompletePopupTagStyle,
  OnPopupTagStyle,
  TodoExitContainerStyle,
  TodoExitSvgStyle,
  TodoPopupBackgroundStyle,
  // TodoPopupContentSpanStyle,
  TodoPopupContentStyle,
  TodoPopupDeadlineInputStyle,
  TodoPopupDeadlineStyle,
  TodoPopupDeadlineTitleStyle,
  TodoPopupStyle,
  TodoPopupTitleStyle,
} from './Todo.style'

interface Props {
  show: boolean
  item: TodoItem
  close(): void
  toggleTodo(id: string): void
  editTitle(id: string, title: string): void
  editDeadline(id: string, deadline: string): void
  editContent(id: string, content: string): void
}

const TodoPopup: NextPage<Props> = ({
  show,
  item: { id, title, completed, content, deadline },
  close,
  toggleTodo,
  editTitle,
  editDeadline,
  editContent,
}) => {
  const [titleValue, setTitleValue] = useState(title)
  const [deadlineValue, setDeadlineValue] = useState(deadline)
  const [contentValue, setContentValue] = useState(content)

  const contentRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const cols = contentRef.current.cols
      console.log(cols)

      let line = 0
      contentRef.current.value.split('\n').forEach(v => {
        line += Math.floor(v.length / cols) + 1
      })
      contentRef.current.rows = Math.max(line, 10)
    }
  }, [content])

  return show ? (
    <>
      <TodoPopupBackgroundStyle
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          close()
        }}
      />
      <TodoPopupStyle>
        <TodoExitContainerStyle>
          <TodoExitSvgStyle
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              close()
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </TodoExitSvgStyle>
        </TodoExitContainerStyle>
        <TodoPopupTitleStyle
          value={titleValue}
          onChange={e => {
            setTitleValue(e.target.value)
          }}
          onBlur={e => {
            if (!titleValue) setTitleValue('?????? ??????')
            editTitle(id, titleValue || '?????? ??????')
          }}
        />
        {completed ? (
          <CompletePopupTagStyle
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              toggleTodo(id)
            }}
          >
            ??????
          </CompletePopupTagStyle>
        ) : (
          <OnPopupTagStyle
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              toggleTodo(id)
            }}
          >
            ?????? ???
          </OnPopupTagStyle>
        )}
        <TodoPopupDeadlineStyle>
          <TodoPopupDeadlineTitleStyle>??????</TodoPopupDeadlineTitleStyle>
          <TodoPopupDeadlineInputStyle
            value={deadlineValue}
            onChange={e => {
              setDeadlineValue(e.target.value)
            }}
            onBlur={e => {
              editDeadline(id, deadlineValue)
            }}
            placeholder="????????? ???????????? ???????????????."
          />
        </TodoPopupDeadlineStyle>
        {/* <TodoPopupContentStyle
          // TODO: cols??? 20?????? ?????????. ?????? ????????? ?????? ???????????? ???.
          placeholder="??????"
          value={contentValue}
          onChange={({ target }) => {
            const cols = target.cols

            let line = 0
            target.value.split('\n').forEach(v => {
              line += Math.floor(v.length / cols) + 1
            })
            target.rows = line
            setContentValue(target.value)
          }}
          onBlur={e => {
            editContent(id, contentValue)
          }}
          ref={contentRef}
        /> */}
        <TodoPopupContentStyle
          maxLength={65535}
          placeholder="??????"
          value={contentValue}
          onChange={({ target }) => {
            setContentValue(target.value)
          }}
          onBlur={e => {
            editContent(id, contentValue)
          }}
        />
      </TodoPopupStyle>
    </>
  ) : null
}

export default TodoPopup
