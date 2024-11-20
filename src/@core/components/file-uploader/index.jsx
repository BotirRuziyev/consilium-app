// ** React Imports
import { useState } from 'react'

// ** Modules Imports
import useEMDUploader from '@core/hooks/useEMDUploader'
import useDropzone from '@core/hooks/useDropzone'
import clsx from 'clsx'

// ** Styles Imports
import s from './FileUploader.module.scss'

const FileUploader = ({
  value,
  onUpdate,
  onDelete,
  disabled,
  maxNumberOfFiles = 0,
  accept = { "*": [] }
}) => {
  const [uploadingFiles, setUploadingFiles] = useState([])
  const [isUploading, setUploading] = useState(false)

  const disabledUploadingConditions = isUploading || disabled || value.length === maxNumberOfFiles

  const { uploadFiles } = useEMDUploader({
    onBeforeUpload: (files) => {
      const allFilesLength = value.length + files.length

      if (maxNumberOfFiles && maxNumberOfFiles < allFilesLength) return false

      setUploading(true)

      return true
    },
    onUpdate: (files) => {
      const uploadedOrFailedFiles = files.filter(({ status }) => status === 'success' || status === 'failed')
      if (uploadedOrFailedFiles.length === files.length) {
        const uploadedFiles = uploadedOrFailedFiles.filter(({ status }) => status === 'success')
        onUpdate(uploadedFiles)

        setUploadingFiles([])
        setUploading(false)

        return
      }

      setUploadingFiles(files)
    }
  })

  const { rootProps, inputProps, dragStatus } = useDropzone({
    accept,
    multiple: maxNumberOfFiles !== 1,
    disabled: disabledUploadingConditions,
    onDroped: (files) => {
      uploadFiles(files)
    }
  })

  return (
    <div className={s.fileUploader}>
      <div
        className={clsx(s.container, {
          [s.dragging]: dragStatus.isDraggingOver
        })}
        {...rootProps}
      >
        {dragStatus.isDraggingOver ? (
          <div>Добавить</div>
        ) : (
          <div className={clsx(
            'g-button',
            'm-blue',
            { 'disabled': disabledUploadingConditions }
          )}>
            { 
              isUploading
                ? 'Загрузка...'
                : 'Выберите файл'
            }
          </div>
        )}
        <input {...inputProps} hidden />
      </div>
      <ul className={s.filesList}>
        {value?.map(({ name, url }, index) => (
          <li className={s.fileItem} key={`uploaded-${index}`}>
            <a className={clsx(s.fileName, 'g-link')} href={url}>{name}</a>
            <div className={s.cancellationButton} onClick={() => onDelete(index)}>Удалить</div>
          </li>
        ))}
        {uploadingFiles?.map(({
          id,
          methods,
          fileName,
          status,
          progress
        }, index) => (
          <li className={s.fileItem} key={id}>
            <span className={s.fileName}>{fileName}</span>
            {status === 'started' && (
               <div className={s.started}>Загрузка</div>
            )}
            {status === 'progress' && (
              <div className={s.progress}>{progress}%</div>
            )}
            {status === 'failed' && (
              <div className={s.failed}>Ошибка</div>
            )}
            {status === 'success' && (
              <div className={s.success}>Загружено</div>
            )}
            {(status === 'started' || status === 'progress') && (
              <div className={s.cancellationButton} onClick={() => methods.stop(index)}>Отмена</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FileUploader
