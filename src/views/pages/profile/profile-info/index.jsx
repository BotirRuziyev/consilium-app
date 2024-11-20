// ** React Imports
import { useState, useMemo } from 'react'

// ** Source code Imports
import { useAuth } from 'src/@core/hooks/useAuth'
import dayjs from 'dayjs'
import avatarImg from '@assets/images/avatar.png'
import AvatarUploadModal from '../modals/avatar-upload-modal'
import Comment from './Comment'


const ProfileInfo = () => {
  const { user, update } = useAuth()

  const [isAvatarUploadModalOpen, setAvatarUploadModalOpen] = useState(false)

  const fullName = useMemo(() => {
    const { firstName, lastName, patronymicName } = user

    const data = []

    if (firstName) data.push(firstName)
    if (lastName) data.push(lastName)
    if (patronymicName) data.push(patronymicName)
    
    return data.join(' ')
  }, [user])

  const handleOpenAvatarUploadModal = () => {
    setAvatarUploadModalOpen(true)
  }

  const handleCloseAvatarUploadModal = () => {
    setAvatarUploadModalOpen(false)
  }

  const handleUpdateAvatar = async (avatarUrl) => {
    await update({ ...user, avatarUrl })
  }

  return (
    <div className="profile-info">
      <div className="profile-info__avatar">
        <div
          className="profile-info__avatar-image"
          style={{ backgroundImage: `url(${user.avatarUrl || avatarImg})` }}
        />
        <div className="profile-info__avatar-edit">
          <div className="profile-info__avatar-edit-icon"></div>
          <span onClick={handleOpenAvatarUploadModal}>Изменить фотографию</span>
        </div>
        <AvatarUploadModal
          isOpen={isAvatarUploadModalOpen}
          onClose={handleCloseAvatarUploadModal}
          avatarUrl={user.avatarUrl}
          onUpdate={handleUpdateAvatar}
        />
      </div>
      <div className="profile-info__table">
        <div className="profile-info__row">
          <div className="profile-info__cell">
            <h5 className="profile-info__row-name">Личные данные</h5>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Ф.И.О</h6>
            <p className="profile-info__cell-text">{fullName}</p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Дата рождения</h6>
            <p className="profile-info__cell-text">
              {
                user.customFields?.['Дата рождения']
                  ? dayjs(user.customFields['Дата рождения']).format('dd.MM.YYYY')
                  : '-'
              }
            </p>
          </div>
        </div>
        <div className="profile-info__row">
          <div className="profile-info__cell">
            <h5 className="profile-info__row-name">
              Контактная информация
            </h5>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Телефон</h6>
            <p className="profile-info__cell-text">
              {user.customFields?.['Телефон'] || '-'}
            </p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Эл. адрес</h6>
            <p className="profile-info__cell-text">{user.login}</p>
          </div>
        </div>
        <div className="profile-info__row profile-info__row m-nogap">
          <div className="profile-info__cell">
            <h5 className="profile-info__row-name">Профессиональная информация</h5>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Должность</h6>
            <p className="profile-info__cell-text">
              {user.customFields?.['Должность'] || '-'}
            </p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Квалификация</h6>
            <p className="profile-info__cell-text">
              {user.customFields?.['Квалификация'] || '-'}
            </p>
          </div>
        </div>
        {/* <div className="profile-info__row profile-info__row m-nogap">
          <div className="profile-info__cell"></div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Подразделение</h6>
            <p className="profile-info__cell-text">Скорая помощь</p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Табельный номер</h6>
            <p className="profile-info__cell-text">556</p>
          </div>
        </div> */}
        {/* <div className="profile-info__row">
          <div className="profile-info__cell"></div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Бригада</h6>
            <p className="profile-info__cell-text">304</p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Допуск</h6>
            <p className="profile-info__cell-text">1</p>
          </div>
        </div> */}
        {/* <div className="profile-info__row">
          <div className="profile-info__cell">
            <h5 className="profile-info__row-name">Совместительство</h5>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Подразделение</h6>
            <p className="profile-info__cell-text">Травматология</p>
          </div>
          <div className="profile-info__cell">
            <h6 className="profile-info__cell-header">Коэффициент совместительства</h6>
            <p className="profile-info__cell-text">0,4</p>
          </div>
        </div> */}
        <Comment user={user} onUpdate={update} />
      </div>
    </div>
  )
}

export default ProfileInfo