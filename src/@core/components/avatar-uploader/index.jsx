// ** React Imports
import { useState } from 'react'

// ** Modules Imports
import clsx from 'clsx'

// ** Source code imports
import uploaderConfig from 'src/configs/uploader'
import useUppy from '@core/hooks/useUppy'
import useUppyDropzone from '@core/hooks/useUppyDropzone'

// ** Styles Imports
import s from './AvatarUploader.module.scss'

const accept = {
  'image/jpg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
}

const AvatarUploader = ({
  pluginId,
  uploaderName,
  options,
  value,
  onUpdate,
  onFilesAdd,
  disabled,
  loadingAvatar
}) => {
  const [isLoading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const uppy = useUppy({
    id: pluginId,
    accept,
    uploaderName,
    options,
    onFilesAdd: async (files) => {
      if (files.length > 1) {
        files.forEach(({ id }) => uppy.removeFile(id))
        // createAlert({
        //   autoHideDuration: 2500,
        //   action: false,
        //   open: true,
        //   message: {
        //     type: 'formatMessage',
        //     value: 'error-maximum-attach-files',
        //     opts: { count: 1 }
        //   },
        //   variant: 'filled',
        //   alertSeverity: 'error',
        //   actionButton: false
        // })

        return
      }

      if (onFilesAdd) await onFilesAdd(files, uppy)
      else uppy.upload()
    },
    onProgress: (data) => {
      setProgress(data)
    },
    onUploading: () => {
      setProgress(0)
      setLoading(true)
    },
    onFailed: () => {
      uppy.getFiles().forEach((file) => {
        if (file.error) uppy.removeFile(file.id)
      })

      setProgress(0)
      setLoading(false)

      // createAlert({
      //   autoHideDuration: 3000,
      //   action: false,
      //   open: true,
      //   message: { type: 'formatMessage', value: 'error-by-upload-files' },
      //   variant: 'filled',
      //   alertSeverity: 'error',
      //   actionButton: false
      // })
    },
    onComplete: (data) => {
      uppy.getFiles().forEach((file) => {
        if (file.progress.uploadComplete) uppy.removeFile(file.id)
      })

      setLoading(false)

      if (!data.successful.length) return

      const original = `${uploaderConfig.fileUrl()}/${data.successful[0].response.uploadURL.split('/').pop()}`
      onUpdate({ original })

      // createAlert({
      //   autoHideDuration: 2500,
      //   action: false,
      //   open: true,
      //   message: { type: 'formatMessage', value: 'files-uploaded-success' },
      //   variant: 'filled',
      //   alertSeverity: 'success',
      //   actionButton: false
      // })
    },
    onCancelAll: () => {
      uppy.getFiles().forEach((file) => {
        if (file.error) uppy.removeFile(file.id)
      })

      setProgress(0)
      setLoading(false)
    }
  })

  const disabledUploadingConditions = isLoading || loadingAvatar || disabled

  const { rootProps, inputProps } = useUppyDropzone({
    uppy,
    accept,
    maxNumberOfFiles: 1,
    disabled: disabledUploadingConditions
  })
  
  return (
    <div className={s.avatarUploader}>
      <div
        className={clsx(s.thumbnail, { [s.thumbnailLoading]: loadingAvatar })}
        style={{ backgroundImage: `url(${value})` }}
      />
      <div className={s.container} {...rootProps}>
        <input {...inputProps} hidden />
        <div
          className={clsx(
            'g-button',
            'm-blue',
            { 'disabled': disabledUploadingConditions }
          )}
        >
          {
            isLoading
              ? `Загрузка ${progress}%`
              : (value ? 'Загрузить другое' : 'Загрузить аватар')
          }
        </div>
      </div>
    </div>
  )
}

export default AvatarUploader
