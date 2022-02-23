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
    dispatcher: Dispatch<SetStateAction<number>>
  ) => ChangeEventHandler<HTMLInputElement>
  const handleChange: ChangeHandler = dispatch => e => {
    const { value } = e.target
    const newValue = parseInt(value)
    if (newValue) {
      dispatch(newValue)
    }
  }

  return (
    <DateDisplayStyle>
      <YearNumStyle value={year} onChange={handleChange(setYear)} />
      <DateSepStyle>.</DateSepStyle>
      <DateNumStyle value={month} onChange={handleChange(setMonth)} />
    </DateDisplayStyle>
  )
}

export default DatePicker
