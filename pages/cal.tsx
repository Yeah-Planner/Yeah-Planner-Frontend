import { NextPage } from 'next'
import { CalendarContainerStyle } from '../components/Calendar/Calendar.style'
import DatePicker from '../components/Calendar/DatePicker'

const Cal: NextPage = () => {
  return (
    <CalendarContainerStyle>
      <DatePicker />
    </CalendarContainerStyle>
  )
}

export default Cal
