// ** React Imports
import { useState } from 'react'

// ** Source code Imports
import { categoryOptions } from '../opts'

const DocumentsFiltersCategoryDropdown = ({
  onClose,
  value,
  onChange
}) => {
  const [categories, setCategories] = useState(
    categoryOptions.map((item) => ({
      value: item,
      checked: !!value.find((itemValue) => item === itemValue)
    }))
  )

  const handleChange = () => {
    onChange(categories.filter(({ checked }) => checked).map(({ value }) => value))
    onClose()
  }

  return (
    <div className="g-dropdown">
      <h6 className="g-dropdown__header g-filter-dropdown__header">Выберите значение</h6>
      <div className="g-dropdown__content">
        <ul className="g-filter-dropdown__items">
          {categories.map((item, index) => {
            return (
              <li key={index} className="g-filter-dropdown__item">
                <label className="g-checkbox">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      const newState = [...categories]
                      newState[index].checked = !newState[index].checked
                      setCategories(newState)
                    }}
                  />
                  {item.value}
                </label>
              </li>
            )
          })}
        </ul>
        <div className="g-filter-dropdown__footer">
          <button
            className="g-button m-noborder"
            onClick={handleChange}
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocumentsFiltersCategoryDropdown
