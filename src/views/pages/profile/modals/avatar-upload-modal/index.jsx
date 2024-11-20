// ** React Imports
import { useState } from 'react'

// ** Source coe Imports
import Modal from '@core/components/modal'
import AvatarUploader from '@core/components/avatar-uploader'

const AvatarUploadModal = ({ isOpen, onClose, avatarUrl, onUpdate }) => {
  const [loading, setLoading] = useState(false)

  const onUpdateAvatar = async (url) => {
    setLoading(true)

    try {
      await onUpdate(url)
      onClose()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="g-modal__header">Изменение фотографии</h3>
      <p className="g-modal__text">Выберите файл с разрешением .JPEG или .PNG и размером не больше 5 Mb.</p>
      <AvatarUploader
        value={avatarUrl}
        onUpdate={(data) => onUpdateAvatar(data.original)}
        loadingAvatar={loading}
      />
    </Modal>
  )
}

export default AvatarUploadModal
