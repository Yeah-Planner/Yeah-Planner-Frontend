import { NextPage } from 'next'
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react'
import { CalChangeHandler } from '../../pages/cal'
import {
  DateDisplayStyle,
  DateNumStyle,
  DateSepStyle,
  YearNumStyle,
} from './DatePicker.style'

interface Props {
  month: number
  year: number
  setMonth: Dispatch<SetStateAction<number>>
  setYear: Dispatch<SetStateAction<number>>
  handleChange: CalChangeHandler
}

const DatePicker: NextPage<Props> = ({
  handleChange,
  month,
  setMonth,
  setYear,
  year,
}) => {
  return (
    <DateDisplayStyle>
      <YearNumStyle value={year} onChange={handleChange(setYear, 'year')} />
      <DateSepStyle>.</DateSepStyle>
      <DateNumStyle value={month} onChange={handleChange(setMonth, 'month')} />
    </DateDisplayStyle>
  )
}

export default DatePicker
