import { NextPage } from 'next'
import {
  DayPopupBackgroundStyle,
  DayPopupExitStyle,
  DayPopupExitSvgStyle,
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
}

const DayPopup: NextPage<Props> = ({ year, month, date, handleClose }) => {
  return (
    <DayPopupBackgroundStyle>
      <DayPopupStyle>
        <DayPopupExitStyle>
          <div>nav</div>
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
