// ** React Imports
import { useState, useMemo, useCallback, useRef } from 'react'
import '@uppy/core/dist/style.min.css'

// ** Source code Imports
import { acceptPropAsAcceptAttr } from 'src/tools/uppy/uploader'

const useDropzone = ({
  accept,
  onDragOver = () => {
    /* Empty... */
  },
  onDragLeave = () => {
    /* Empty... */
  },
  onDrop = () => {
    /* Empty... */
  },
  onDroped = () => {
    /* Empty... */
  },
  multiple = true,
  disabled = false
}) => {
  const timeout = useRef()
  const inputRef = useRef(null)
  const [dragStatus, setDragStatus] = useState({ isDraggingOver: false })
  const acceptAttr = useMemo(() => acceptPropAsAcceptAttr(accept), [accept])

  const onInputChange = useCallback(
    event => {
      if (disabled) return

      const files = Array.from(event.target.files)
      if (files.length) onDroped(files)

      event.target.value = null
    },
    [onDroped, disabled]
  )

  const handleDragOver = useCallback(
    event => {
      if (disabled) return

      event.preventDefault()
      event.stopPropagation()

      const { types } = event.dataTransfer
      const hasFiles = types.some(type => type === 'Files')

      if (!hasFiles) {
        event.dataTransfer.dropEffect = 'none'
        clearTimeout(timeout.current)

        return
      }

      event.dataTransfer.dropEffect = 'copy'

      clearTimeout(timeout.current)
      setDragStatus({ isDraggingOver: true })

      onDragOver(event)
    },
    [onDragOver, disabled]
  )

  const handleDragLeave = useCallback(
    event => {
      if (disabled) return

      event.preventDefault()
      event.stopPropagation()

      clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        setDragStatus({ isDraggingOver: false })
      }, 50)

      onDragLeave(event)
    },
    [onDragLeave, disabled]
  )

  const handleDrop = useCallback(
    async event => {
      if (disabled) return

      event.preventDefault()

      clearTimeout(timeout.current)

      setDragStatus({ isDraggingOver: false })

      onDrop(event)

      // Add all dropped files
      const files = Array.from(event.dataTransfer.files).filter(({ type }) => {
        const acceptedTypes = acceptAttr.replace(/\*/g, '').split(',')
        let isExist = false

        acceptedTypes.forEach((item) => {
          if (type.includes(item)) isExist = true
        })

        return isExist
      })
      if (files.length) onDroped(files)
    },
    [onDrop, onDroped, disabled, acceptAttr]
  )

  return {
    rootProps: {
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      onClick: () => !disabled && inputRef.current.click()
    },
    inputProps: {
      ref: inputRef,
      multiple,
      accept: acceptAttr,
      type: 'file',
      onChange: onInputChange
    },
    open: () => !disabled && inputRef.current.click(),
    dragStatus
  }
}

export default useDropzone
