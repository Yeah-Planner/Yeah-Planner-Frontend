import { NextPage } from 'next'
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react'
import Calendar from '../components/Calendar/Calendar'
import { CalendarContainerStyle } from '../components/Calendar/Calendar.style'
import DatePicker from '../components/Calendar/DatePicker'
import Head from 'next/head'

export type CalChangeHandler = (
  dispatcher: Dispatch<SetStateAction<number>>,
  type: 'month' | 'year'
) => ChangeEventHandler<HTMLInputElement>

const Cal: NextPage = () => {
  const initialDate = new Date()
  const [month, setMonth] = useState(initialDate.getMonth() + 1)
  const [year, setYear] = useState(initialDate.getFullYear())

  // const filterNonDigits: KeyboardEventHandler<HTMLInputElement> = key => {
  //   try {
  //     parseInt(key.key)
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  const handleChange: CalChangeHandler = (dispatch, type) => e => {
    const { value } = e.target

    const minValue = 1
    const maxValue = type == 'month' ? 12 : 9999

    // This is not perfect. If maliculous user multipulates the value with
    // Dev tools it will be no use. Check it more in axios method.
    const newValue = Math.max(Math.min(parseInt(value), maxValue), minValue)
    if (newValue) {
      dispatch(newValue)
    }
  }

  return (
    <>
      <Head>
        <title>Calendar - Yeah Planner</title>
        <meta
          name="description"
          content="Yeah Planner Calendar page. Index and Plan your daily activities."
        />
      </Head>

      <CalendarContainerStyle>
        <DatePicker
          handleChange={handleChange}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <Calendar month={month} year={year} />
      </CalendarContainerStyle>
    </>
  )
}

export default Cal
