// ** React Imports
import { useRef, useState } from 'react'

const SerchField = ({ value: searchString, onChange }) => {
  const ref = useRef(null)

  const [value, setValue] = useState(searchString)

  return (
    <div className="g-search documents__search">
      <input
        ref={ref}
        className="g-form__input"
        type="text"
        placeholder="Поиск по названию документа"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        onBlur={() => onChange(value)}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') ref.current?.blur()
        }}
      />
    </div>
  )
}

export default SerchField
