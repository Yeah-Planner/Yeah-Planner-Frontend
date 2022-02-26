import { NextPage } from 'next'
import { useState } from 'react'
import {
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
}

const CalendarDay: NextPage<Props> = ({
  toggleShow,
  disabled = false,
  date = 1,
  setPopupDate,
}) => {
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
      {/* Other additional components */}
    </TableDayStyle>
  )
}

export default CalendarDay
