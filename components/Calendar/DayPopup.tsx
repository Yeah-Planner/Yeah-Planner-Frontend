import { NextPage } from 'next'
import { DayPopupStyle } from './Calendar.style'

interface Props {
  show: boolean
  year: number
  month: number
  date: number
}

const DayPopup: NextPage<Props> = ({ show, year, month, date }) => {
  return show ? (
    <DayPopupStyle>
      {year}.{month}.{date}
    </DayPopupStyle>
  ) : null
}

export default DayPopup
