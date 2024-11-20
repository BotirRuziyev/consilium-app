// ** React Imports
import { useState } from 'react'

// ** Modules Imports
import { useForm, useFieldArray } from 'react-hook-form'

// ** Source coe Imports
import { upsertUserDocs } from 'src/state-manager/user-documents'
import Modal from '@core/components/modal'
import FileUploader from '@core/components/file-uploader'
import clsx from 'clsx'

const UploadDocumentsModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit, reset } = useForm({
    initialValue: {
      items: []
    }
  })

  const items = useFieldArray({ name: 'items', control })

  const isDisabled = loading || !items.fields.length

  const onSubmit = async ({ items }) => {
    setLoading(true)

    try {
      const fileData = items[0]

      if (fileData) {
        await upsertUserDocs(fileData)

        reset({ items: [] })
      }

      onClose()
    } finally { 
      setLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="g-modal__header">Загрузить документы</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUploader
          value={items.fields}
          maxNumberOfFiles={10}
          accept={{
            'application/pdf': ['.pdf'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/webp': ['.webp']
          }}
          onUpdate={(files) => {
            files.forEach(({ fileName, fileUrl }) => {
              items.append({
                name: fileName,
                url: fileUrl
              })
            })
          }}
          onDelete={(removeIndex) => {
            items.remove(removeIndex)
          }}
        />
        <div className="g-form__row password-change__buttons">
          <div className="g-button-group">
            <button
              className={clsx('g-button', 'm-blue', {
                disabled: isDisabled
              })}
              type="submit"
            >
              Сохранить
            </button>
            <button
              className={clsx('g-button', {
                disabled: isDisabled
              })}
              type="button"
              onClick={onClose}
            >
              Отмена
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default UploadDocumentsModal
