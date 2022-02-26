import { NextPage } from 'next'
import { DayPopupBackgroundStyle, DayPopupStyle } from './Calendar.style'

interface Props {
  show: boolean
  year: number
  month: number
  date: number
}

const DayPopup: NextPage<Props> = ({ show, year, month, date }) => {
  return show ? (
    <DayPopupBackgroundStyle>
      <DayPopupStyle>
        {year}.{month}.{date}
      </DayPopupStyle>
    </DayPopupBackgroundStyle>
  ) : null
}

export default DayPopup
