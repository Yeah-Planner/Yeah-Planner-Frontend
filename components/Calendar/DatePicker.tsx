import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import { CalChangeHandler } from '../../pages/cal'
import {
  DateDisplayStyle,
  DateNumStyle,
  DateSepStyle,
  NavArrowLeftStyle,
  NavArrowRightStyle,
  NavigateStyle,
  NavTodayButtonStyle,
  YearNumStyle,
} from './Calendar.style'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

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
      <NavigateStyle>
        <NavArrowLeftStyle>
          <AiOutlineArrowLeft />
        </NavArrowLeftStyle>
        <NavArrowRightStyle>
          <AiOutlineArrowRight />
        </NavArrowRightStyle>
        <NavTodayButtonStyle>Today</NavTodayButtonStyle>
      </NavigateStyle>
    </DateDisplayStyle>
  )
}

export default DatePicker
