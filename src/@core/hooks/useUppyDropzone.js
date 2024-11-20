// ** React Imports
import { useState, useMemo, useCallback, useRef } from 'react'
import toArray from '@uppy/utils/lib/toArray'
import getDroppedFiles from '@uppy/utils/lib/getDroppedFiles'
import '@uppy/core/dist/style.min.css'

// ** Source code Imports
import { acceptPropAsAcceptAttr } from 'src/tools/uppy/uploader'

const useUppyDropzone = ({
  uppy,
  accept,
  sourceId = 'DragDrop',
  onDragOver = () => {
    /* Empty... */
  },
  onDragLeave = () => {
    /* Empty... */
  },
  onDrop = () => {
    /* Empty... */
  },
  onUpload = () => {
    /* Empty... */
  },
  disabled = false
}) => {
  const timeout = useRef()
  const inputRef = useRef(null)
  const [isDraggingOver, setDraggingOver] = useState({ isDraggingOver: false })
  const acceptAttr = useMemo(() => acceptPropAsAcceptAttr(accept), [accept])

  const addFiles = useCallback(
    files => {
      const descriptors = files.map(file => ({
        source: sourceId,
        name: file.name,
        type: file.type,
        data: file,
        meta: {
          relativePath: file.relativePath || null
        }
      }))

      try {
        uppy.addFiles(descriptors)
      } catch (err) {
        uppy.log(err)
      }
    },
    [uppy, sourceId]
  )

  const onInputChange = useCallback(
    event => {
      if (disabled) return

      const files = toArray(event.target.files)

      if (files.length > 0) {
        uppy.log('[DragDrop] Files selected through input')
        addFiles(files)
      }

      event.target.value = null
      onUpload(files)
    },
    [uppy, onUpload, addFiles, disabled]
  )

  const handleDragOver = useCallback(
    event => {
      if (disabled) return

      event.preventDefault()
      event.stopPropagation()

      const { types } = event.dataTransfer
      const hasFiles = types.some(type => type === 'Files')
      const { allowNewUpload } = uppy.getState()

      if (!hasFiles || !allowNewUpload) {
        event.dataTransfer.dropEffect = 'none'
        clearTimeout(timeout.current)

        return
      }

      event.dataTransfer.dropEffect = 'copy'

      clearTimeout(timeout.current)
      setDraggingOver({ isDraggingOver: true })

      onDragOver(event)
    },
    [uppy, onDragOver, disabled]
  )

  const handleDragLeave = useCallback(
    event => {
      if (disabled) return

      event.preventDefault()
      event.stopPropagation()

      clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        setDraggingOver({ isDraggingOver: false })
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

      setDraggingOver({ isDraggingOver: false })

      const logDropError = error => {
        uppy.log(error, 'error')
      }

      // Add all dropped files
      const files = await getDroppedFiles(event.dataTransfer, { logDropError })

      if (files.length > 0) {
        uppy.log('[DragDrop] Files dropped')
        addFiles(files)
      }

      onDrop(event)
      onUpload(files)
    },
    [uppy, onUpload, onDrop, addFiles, disabled]
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
      multiple: false,
      accept: acceptAttr,
      type: 'file',
      onChange: onInputChange
    },
    open: () => !disabled && inputRef.current.click(),
    isDraggingOver
  }
}

export default useUppyDropzone
