// ** Modules Imports
import { useMemo, useState } from 'react'
import { Calendar } from 'react-date-range-dayjs'
import dayjs from 'dayjs'

// ** Styles Imports
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Datepicker = ({
  value,
  onChange,
  onClose
}) => {
  const initialDate = useMemo(() => {
    const formatedDate = dayjs(value)
    const isValidDate = formatedDate.isValid()

    return isValidDate ? formatedDate : null
  }, [value])

  const [date, setDate] = useState(initialDate)

  const handleChangeDate = () => {
    onChange(date)
    onClose()
  }

  return (
    <div className="react-datepicker-custom">
      <Calendar
        date={date}
        onChange={setDate}
        locale={dayjs.locale()}
      />
      <div className="react-datepicker__footer">
        <button className="g-button m-noborder m-cancel" onClick={onClose}>
          Отменить
        </button>
        <button className="g-button m-noborder" onClick={handleChangeDate}>
          Применить
        </button>
      </div>
    </div>
  )
}

export default Datepicker
