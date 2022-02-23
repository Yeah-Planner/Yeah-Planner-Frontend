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
  const handleLeftClick = () => {
    if (month > 1) {
      setMonth(month - 1)
    } else {
      setMonth(12)
      setYear(year - 1)
    }
  }

  const handleRightClick = () => {
    if (month < 12) {
      setMonth(month + 1)
    } else {
      setMonth(1)
      setYear(year + 1)
    }
  }

  const handleTodayClick = () => {
    const initialDate = new Date()
    setMonth(initialDate.getMonth() + 1)
    setYear(initialDate.getFullYear())
  }

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
        <NavArrowLeftStyle onClick={handleLeftClick}>
          <AiOutlineArrowLeft />
        </NavArrowLeftStyle>
        <NavArrowRightStyle onClick={handleRightClick}>
          <AiOutlineArrowRight />
        </NavArrowRightStyle>
        <NavTodayButtonStyle onClick={handleTodayClick}>
          Today
        </NavTodayButtonStyle>
      </NavigateStyle>
    </DateDisplayStyle>
  )
}

export default DatePicker
