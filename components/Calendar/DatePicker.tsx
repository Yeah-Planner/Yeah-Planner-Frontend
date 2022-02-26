import { NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react'
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
  setDate: Dispatch<SetStateAction<number>>
  handleChange: CalChangeHandler
  inputMonth: number
  inputYear: number
  setInputMonth: Dispatch<SetStateAction<number>>
  setInputYear: Dispatch<SetStateAction<number>>
}

const DatePicker: NextPage<Props> = ({
  handleChange,
  month,
  setMonth,
  setDate,
  setYear,
  year,
  inputMonth,
  inputYear,
  setInputMonth,
  setInputYear,
}) => {
  const handleLeftClick = () => {
    if (month > 1) {
      setMonth(month - 1)
      setInputMonth(month - 1)
    } else {
      setMonth(12)
      setInputMonth(12)
      setYear(year - 1)
      setInputYear(year - 1)
    }
  }

  const handleRightClick = () => {
    if (month < 12) {
      setMonth(month + 1)
      setInputMonth(month + 1)
    } else {
      setMonth(1)
      setInputMonth(1)
      setYear(year + 1)
      setInputYear(year + 1)
    }
  }

  const handleTodayClick = () => {
    const initialDate = new Date()
    setMonth(initialDate.getMonth() + 1)
    setInputMonth(initialDate.getMonth() + 1)
    setYear(initialDate.getFullYear())
    setInputYear(initialDate.getFullYear())
    setDate(initialDate.getDate())
  }

  const parseNum = (str: string): number => {
    const parse = parseInt(str)
    if (isNaN(parse)) {
      return -1
    }

    return parse
  }

  return (
    <DateDisplayStyle>
      <div>
        <YearNumStyle
          type="number"
          value={inputYear > 0 ? inputYear : ''}
          onChange={({ target: { value } }) => {
            const parsed = parseNum(value)
            setInputYear(parsed)
            if (parsed > 0 && parsed < 3000) setYear(parsed)
          }}
          onBlur={e => {
            handleChange(setYear, 'year')(e)
            setInputYear(Math.max(1, Math.min(9999, inputYear)))
          }}
        />
        <DateSepStyle>.</DateSepStyle>
        <DateNumStyle
          type="number"
          value={inputMonth > 0 ? inputMonth : ''}
          onChange={({ target: { value } }) => {
            const parsed = parseNum(value)
            setInputMonth(parsed)
            if (parsed > 0 && parsed < 13) setMonth(parsed)
          }}
          onBlur={e => {
            handleChange(setMonth, 'month')(e)
            setInputMonth(Math.max(1, Math.min(12, inputMonth)))
          }}
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
