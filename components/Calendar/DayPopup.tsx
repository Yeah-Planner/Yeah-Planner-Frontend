import { createHash } from 'crypto'
import { NextPage } from 'next'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { CalTodo } from '../../pages/cal'
import {
  DayPopupBackgroundStyle,
  DayPopupDateStyle,
  DayPopupExitStyle,
  DayPopupExitSvgStyle,
  DayPopupLeftButtonStyle,
  DayPopupRightButtonStyle,
  DayPopupStyle,
  DayPopupTodoAddButtonStyle,
  DayPopupTodoItemContainerStyle,
  DayPopupTodoItemRemoveButtonStyle,
  DayPopupTodoItemStyle,
  DayPopupTodoListHeaderStyle,
  DayPopupTodoListStyle,
  DayPopupTodoTitleInputStyle,
} from './Calendar.style'

interface Props {
  year: number
  month: number
  date: number
  handleClose(): void
  setDate(date: number): void
  setMonth(month: number): void
  setYear(year: number): void
  setInputMonth(month: number): void
  setInputYear(year: number): void
  todos: CalTodo[]
  setTodos(todos: CalTodo[]): void
}

const DayPopup: NextPage<Props> = ({
  year,
  month,
  date,
  handleClose,
  setDate,
  setMonth,
  setYear,
  setInputMonth,
  setInputYear,
  setTodos,
  todos,
}) => {
  const [content, setContent] = useState('')

  const lastDayOfMonth = new Date(year, month, 0).getDate()
  const handleLeftClick = () => {
    if (date > 1) setDate(date - 1)
    else {
      if (month > 1) {
        setMonth(month - 1)
        setInputMonth(month - 1)
        setDate(new Date(year, month - 1, 0).getDate())
      } else if (year > 1) {
        setMonth(12)
        setInputMonth(12)
        setDate(new Date(year - 1, 12, 0).getDate())
        setYear(year - 1)
        setInputYear(year - 1)
      }
    }
  }
  const handleRightClick = () => {
    if (date < lastDayOfMonth) setDate(date + 1)
    else {
      if (month < 12) {
        setMonth(month + 1)
        setInputMonth(month + 1)
        setDate(1)
      } else if (year < 9999) {
        setMonth(1)
        setInputMonth(1)
        setDate(1)
        setYear(year + 1)
        setInputYear(year + 1)
      }
    }
  }

  const getId = (): string => {
    return createHash('sha256')
      .update(content + Date.now().toString())
      .digest('hex')
  }
  const handleSubmit = (id: string) => {
    if (!content) return

    setTodos([
      ...todos,
      {
        year,
        month,
        date,
        content,
        id,
      },
    ])
    setContent('')
    //
  }

  return (
    <DayPopupBackgroundStyle>
      <DayPopupStyle>
        <DayPopupExitStyle>
          <div>
            <DayPopupLeftButtonStyle onClick={handleLeftClick}>
              <AiOutlineArrowLeft />
            </DayPopupLeftButtonStyle>
            <DayPopupRightButtonStyle onClick={handleRightClick}>
              <AiOutlineArrowRight />
            </DayPopupRightButtonStyle>
          </div>
          <DayPopupExitSvgStyle
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              handleClose()
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </DayPopupExitSvgStyle>
        </DayPopupExitStyle>
        <DayPopupDateStyle>
          {year}.{month}.{date}
        </DayPopupDateStyle>
        <DayPopupTodoListStyle>
          <DayPopupTodoListHeaderStyle>
            <DayPopupTodoTitleInputStyle
              value={content}
              onChange={({ target: { value } }) => {
                setContent(value)
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  handleSubmit(getId())
                }
              }}
            />
            <DayPopupTodoAddButtonStyle
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                handleSubmit(getId())
              }}
            >
              추가
            </DayPopupTodoAddButtonStyle>
          </DayPopupTodoListHeaderStyle>
          <DayPopupTodoItemContainerStyle>
            {todos
              .filter(
                ({ year: y, month: m, date: d }) =>
                  y === year && m === month && d === date
              )
              .map((todo, i) => (
                <DayPopupTodoItemStyle key={i}>
                  <div>{todo.content}</div>
                  <DayPopupTodoItemRemoveButtonStyle
                    onClick={e => {
                      e.stopPropagation()
                      e.preventDefault()
                      setTodos(
                        todos.filter(({ id }) => {
                          return todo.id !== id
                        })
                      )
                    }}
                  >
                    -
                  </DayPopupTodoItemRemoveButtonStyle>
                </DayPopupTodoItemStyle>
              ))}
          </DayPopupTodoItemContainerStyle>
        </DayPopupTodoListStyle>
      </DayPopupStyle>
    </DayPopupBackgroundStyle>
  )
}

export default DayPopup
