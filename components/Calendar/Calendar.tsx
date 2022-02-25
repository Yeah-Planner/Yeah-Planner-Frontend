import { NextPage } from 'next'
import {
  CalendarTableStyle,
  TableDayDisalbedStyle,
  TableDayNumStyle,
  TableDayStyle,
  TableHeaderStyle,
  TableRowStyle,
} from './Calendar.style'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'

interface Props {
  month: number
  year: number
}

const Calendar: NextPage<Props> = ({ month, year }) => {
  // This causes internal server error.
  // return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />

  const days = ['일', '월', '화', '수', '목', '금', '토']
  const firstDate = new Date(year, month - 1, 1) // 1st day of month
  const lastDate = new Date(year, month, 0) // last day of month
  const startDay = firstDate.getDay()
  const weekNum = Math.ceil((lastDate.getDate() + startDay) / 7)

  const weeks = [] // iterator
  for (let i = 0; i < weekNum; i++) {
    // weeks.push(<TableRowStyle key={i} />)
    weeks.push(i)
  }

  return (
    <CalendarTableStyle role="presentation">
      <thead>
        <tr>
          {days.map((day, i) => {
            return <TableHeaderStyle key={i}>{day}</TableHeaderStyle>
          })}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => {
          return (
            <TableRowStyle key={i}>
              {[...Array(7)].map((_, j) => {
                const date = i * 7 + j + 1 - startDay
                if (date <= 0 || date > lastDate.getDate()) {
                  return <TableDayDisalbedStyle key={j} />
                }
                return (
                  <TableDayStyle key={j}>
                    <TableDayNumStyle>
                      <TableDayNumStyle>{date}</TableDayNumStyle>
                    </TableDayNumStyle>
                    {/* Other additional components */}
                  </TableDayStyle>
                )
              })}
            </TableRowStyle>
          )
        })}
      </tbody>
    </CalendarTableStyle>
  )
}

export default Calendar
