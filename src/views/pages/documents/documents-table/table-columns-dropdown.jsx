// ** React Imports
import { useState } from 'react'

// ** Modules Imports
import { clsx } from 'clsx'

// ** Source code Imports
import { DragList, DragRow } from 'src/@core/components/drag-and-drop-list'

const TableColumnItem = ({
  text,
  visible,
  // attached,
  toggleVisibilityStatus,
  // toggleAttachStatus,
  dropRef,
  dragRef,
  isDragging
}) => {
  return (
    <li
      ref={dropRef}
      className="g-table-filter-dropdown__item"
      style={{ opacity: isDragging ? .5 : 1 }}
    >
      <div ref={dragRef} className="g-table-filter-dropdown__icon m-drag" />
      <span className="g-table-filter-dropdown__text m-fixed-width">{text}</span>
      <div className="g-table-filter-dropdown__icons">
        <div 
          className={clsx(
            'g-table-filter-dropdown__icon',
            'm-eye',
            {'m-off': !visible}
          )}
          onClick={toggleVisibilityStatus}
        />
        {/* <div 
          className={clsx(
            'g-table-filter-dropdown__icon',
            'm-pin',
            {'m-disabled': !attached}
          )}
          onClick={toggleAttachStatus}
        /> */}
      </div>
    </li>
  )
}

const TableColumnsDropdown = ({ items, onChange, onClose }) => {
  const [columns, setColumns] = useState(items)

  const handleToggleVisibilityStatus = (columnIndex) => {
    setColumns((state) => {
      return state.map((item, index) => {
        if (index === columnIndex) return {
          ...item,
          visible: !item.visible
        }

        return item
      })
    })
  }

  const handleToggleAttachStatus = (columnIndex) => {
    setColumns((state) => {
      return state.map((item, index) => {
        if (index === columnIndex) return {
          ...item,
          attached: !item.attached
        }

        return item
      })
    })
  }

  const moveRow = (dragIndex, hoverIndex) => {
    setColumns((state) => {
      const newState = [...state]
      const element = newState[dragIndex]
      newState.splice(dragIndex, 1)
      newState.splice(hoverIndex, 0, element)

      return newState
    })
  }

  const handleChange = () => {
    onChange(columns)
    onClose()
  }

  return (
    <div className="g-dropdown">
      <h6 className="g-dropdown__header g-table-filter-dropdown__header">Свойства таблицы</h6>
      <div className="g-dropdown__content">
        <ul className="g-table-filter-dropdown__items">
          <DragList>
            {columns.map((tableProperty, index) => (
              <DragRow index={index} moveRow={moveRow}>
                {({ dropRef, dragRef, isDragging }) => (
                  <TableColumnItem
                    key={index}
                    text={tableProperty.name}
                    visible={tableProperty.visible}
                    attached={tableProperty.attached}
                    toggleVisibilityStatus={() => handleToggleVisibilityStatus(index)}
                    toggleAttachStatus={() => handleToggleAttachStatus(index)}
                    dropRef={dropRef}
                    dragRef={dragRef}
                    isDragging={isDragging}
                  />
                )}
              </DragRow>
            ))}
          </DragList>
        </ul>
      </div>
      <div className="g-table-filter-dropdown__footer">
        <div className="g-table-filter-dropdown__footer-buttons">
          <button className="g-button m-noborder" onClick={onClose}>Отменить</button>
          <button className="g-button m-noborder" onClick={handleChange}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default TableColumnsDropdown
