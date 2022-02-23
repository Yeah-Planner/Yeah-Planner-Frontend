import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import { CalChangeHandler } from '../../pages/cal'
import {
  DateDisplayStyle,
  DateNumStyle,
  DateSepStyle,
  YearNumStyle,
} from './Calendar.style'

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
      <div>
        <YearNumStyle value={year} onChange={handleChange(setYear, 'year')} />
        <DateSepStyle>.</DateSepStyle>
        <DateNumStyle
          value={month}
          onChange={handleChange(setMonth, 'month')}
        />
      </div>
      <div>이동</div>
    </DateDisplayStyle>
  )
}

export default DatePicker
