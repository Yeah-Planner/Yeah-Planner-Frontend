import { NextPage } from 'next'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import {
  DayPopupBackgroundStyle,
  DayPopupExitStyle,
  DayPopupExitSvgStyle,
  DayPopupLeftButtonStyle,
  DayPopupRightButtonStyle,
  DayPopupStyle,
} from './Calendar.style'

interface Props {
  year: number
  month: number
  date: number
  handleClose(): void
  setDate(date: number): void
  setMonth(month: number): void
  setYear(year: number): void
  setInputMonth(month: number): void
  setInputYear(year: number): void
}

const DayPopup: NextPage<Props> = ({
  year,
  month,
  date,
  handleClose,
  setDate,
  setMonth,
  setYear,
  setInputMonth,
  setInputYear,
}) => {
  const lastDayOfMonth = new Date(year, month, 0).getDate()
  const handleLeftClick = () => {
    if (date > 1) setDate(date - 1)
    else {
      if (month > 1) {
        setMonth(month - 1)
        setInputMonth(month - 1)
        setDate(new Date(year, month - 1, 0).getDate())
      } else {
        setMonth(12)
        setInputMonth(12)
        setDate(new Date(year - 1, 12, 0).getDate())
        setYear(year - 1)
        setInputYear(year - 1)
      }
    }
  }
  const handleRightClick = () => {
    if (date < lastDayOfMonth) setDate(date + 1)
    else {
      if (month < 12) {
        setMonth(month + 1)
        setInputMonth(month + 1)
        setDate(1)
      } else {
        setMonth(1)
        setInputMonth(1)
        setDate(1)
        setYear(year + 1)
        setInputYear(year + 1)
      }
    }
  }

  return (
    <DayPopupBackgroundStyle>
      <DayPopupStyle>
        <DayPopupExitStyle>
          <div>
            <DayPopupLeftButtonStyle onClick={handleLeftClick}>
              <AiOutlineArrowLeft />
            </DayPopupLeftButtonStyle>
            <DayPopupRightButtonStyle onClick={handleRightClick}>
              <AiOutlineArrowRight />
            </DayPopupRightButtonStyle>
          </div>
          <DayPopupExitSvgStyle
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              handleClose()
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </DayPopupExitSvgStyle>
        </DayPopupExitStyle>
        {year}.{month}.{date}
      </DayPopupStyle>
    </DayPopupBackgroundStyle>
  )
}

export default DayPopup
