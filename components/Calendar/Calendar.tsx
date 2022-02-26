import { NextPage } from 'next'
import { useState } from 'react'
import {
  CalendarTableStyle,
  // TableDayDisalbedStyle,
  // TableDayNumStyle,
  // TableDayStyle,
  TableHeaderStyle,
  TableRowStyle,
} from './Calendar.style'
import CalendarDay from './CalendarDay'
import DayPopup from './DayPopup'
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

  const [show, setShow] = useState(false)
  const [popupDate, setPopupDate] = useState(1)

  const toggleShow = (newDate: number) => {
    if (newDate !== popupDate) {
      setShow(true)
      setPopupDate(newDate)
    } else setShow(!show)
  }

  const weeks = [] // iterator
  for (let i = 0; i < weekNum; i++) {
    // weeks.push(<TableRowStyle key={i} />)
    weeks.push(i)
  }

  return (
    <>
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
                    return (
                      <CalendarDay
                        disabled={true}
                        key={j}
                        toggleShow={toggleShow}
                        setPopupDate={setPopupDate}
                      />
                    )
                    // return <TableDayDisalbedStyle key={j} />
                  }
                  return (
                    // <TableDayStyle key={j}>
                    //   <TableDayNumStyle>
                    //     <TableDayNumStyle>{date}</TableDayNumStyle>
                    //   </TableDayNumStyle>
                    //   {/* Other additional components */}
                    // </TableDayStyle>
                    <CalendarDay
                      key={j}
                      date={date}
                      toggleShow={toggleShow}
                      setPopupDate={setPopupDate}
                    />
                  )
                })}
              </TableRowStyle>
            )
          })}
        </tbody>
      </CalendarTableStyle>
      <DayPopup show={show} year={year} month={month} date={popupDate} />
    </>
  )
}

export default Calendar
