import React from 'react'
import { useDrag, useDrop } from 'react-dnd'

const DragRow = ({ children, index, moveRow }) => {
  const dropRef = React.useRef(null)
  const dragRef = React.useRef(null)

  const [, drop] = useDrop({
    accept: 'row',
    hover(item, monitor) {
      if (!dropRef.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = dropRef.current.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveRow(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'row',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  preview(drop(dropRef))
  drag(dragRef)

  return <>{children({ dropRef, dragRef, isDragging })}</>
}

export default DragRow
