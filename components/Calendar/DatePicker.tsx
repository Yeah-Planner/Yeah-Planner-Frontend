import { NextPage } from 'next'
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react'
import {
  DateDisplayStyle,
  DateNumStyle,
  DateSepStyle,
  YearNumStyle,
} from './DatePicker.style'

const DatePicker: NextPage = () => {
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

  type ChangeHandler = (
    dispatcher: Dispatch<SetStateAction<number>>,
    type: 'month' | 'year'
  ) => ChangeEventHandler<HTMLInputElement>
  const handleChange: ChangeHandler = (dispatch, type) => e => {
    const { value } = e.target

    const minValue = 1
    const maxValue = type == 'month' ? 12 : 2100

    // This is not perfect. If maliculous user multipulates the value with
    // Dev tools it will be no use. Check it more in axios method.
    const newValue = Math.max(Math.min(parseInt(value), maxValue), minValue)
    if (newValue) {
      dispatch(newValue)
    }
  }

  return (
    <DateDisplayStyle>
      <YearNumStyle value={year} onChange={handleChange(setYear, 'year')} />
      <DateSepStyle>.</DateSepStyle>
      <DateNumStyle value={month} onChange={handleChange(setMonth, 'month')} />
    </DateDisplayStyle>
  )
}

export default DatePicker
