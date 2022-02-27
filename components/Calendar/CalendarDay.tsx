import { NextPage } from 'next'
import { useState } from 'react'
import { CalTodo } from '../../pages/cal'
import {
  DayTodoItemStyle,
  TableDayDisalbedStyle,
  TableDayNumStyle,
  TableDayStyle,
} from './Calendar.style'
import DayPopup from './DayPopup'

interface Props {
  disabled?: boolean
  date?: number
  toggleShow: (newDate: number) => void
  setPopupDate: (date: number) => void
  todos: CalTodo[]
}

const CalendarDay: NextPage<Props> = ({
  toggleShow,
  disabled = false,
  date = 1,
  setPopupDate,
  todos,
}) => {
  let hidden = 0

  return disabled ? (
    <TableDayDisalbedStyle />
  ) : (
    <TableDayStyle
      onClick={e => {
        e.stopPropagation()
        e.preventDefault()
        setPopupDate(date)
        toggleShow(date)
      }}
    >
      <TableDayNumStyle>
        <TableDayNumStyle>{date}</TableDayNumStyle>
      </TableDayNumStyle>
      {todos.map(({ content }, i) => {
        if (i < 4) return <DayTodoItemStyle key={i}>{content}</DayTodoItemStyle>
        else hidden++
      })}
      {hidden > 0 && (
        <div>
          <span>+{hidden}</span>
        </div>
      )}
    </TableDayStyle>
  )
}

export default CalendarDay
