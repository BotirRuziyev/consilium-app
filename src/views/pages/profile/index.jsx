
// ** Source code Imports
import Header from '@core/components/header'
import SidebarMenu from '@core/components/sidebar-menu'
import ProfileTabPanes from './profile-tab-panes'
import { NavTabsContext } from '@core/context/NavTabsContext'
import NavTabs from '@core/components/nav-tabs'
import { useState } from 'react'
import PasswordChangeModal from './modals/password-change-modal'
import UploadDocumentsModal from './modals/upload-documents'

const tabs = [
  {
    id: 1,
    name: 'info',
    tabTitle: 'Общая информация'
  },
  {
    id: 2,
    name: 'docs',
    tabTitle: 'Документы сотрудника'
  },
  {
    id: 3,
    name: 'comments',
    tabTitle: 'Замечания'
  }
]

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(1)
  const [isPasswordChangeModalOpen, setPasswordChangeModalOpen] = useState(false)
  const [isUploadDocumentsModalOpen, setUploadDocumentsModalOpen] = useState(false)

  const handleOpenPasswordChangeModal = () => {
    setPasswordChangeModalOpen(true)
  }

  const handleClosePasswordChangeModal = () => {
    setPasswordChangeModalOpen(false)
  }

  const handleOpenUploadDocumentsModal = () => {
    setUploadDocumentsModalOpen(true)
  }

  const handleCloseUploadDocumentsModal = () => {
    setUploadDocumentsModalOpen(false)
  }

  return (
    <div className="layout-wrapper">
      <SidebarMenu />
      <div className="main">
        <Header />
        <div className="content">
          <ul className="g-breadcrumbs">
            <li className="g-breadcrumbs__item">Главная</li>
            <li className="g-breadcrumbs__item">Профиль</li>
            {/* <li className="g-breadcrumbs__item">Общая информация</li> */}
          </ul>
          <NavTabsContext.Provider value={{tabIndex, setTabIndex}}>
          <div className="profile">
            <div className="g-page-header">
              <h1 className="g-page-name">Профиль</h1>
              <NavTabs tabsData={tabs} />
              <div className="g-button-group">
                <button className="g-button" onClick={handleOpenPasswordChangeModal}>
                  Изменить пароль
                </button>
                {tabIndex === 2 && (
                  <button className="g-button m-blue" onClick={handleOpenUploadDocumentsModal}>
                    Добавить документ
                  </button>
                )}
              </div>
            </div>
            <ProfileTabPanes />
            <PasswordChangeModal isOpen={isPasswordChangeModalOpen} onClose={handleClosePasswordChangeModal} />
            <UploadDocumentsModal isOpen={isUploadDocumentsModalOpen} onClose={handleCloseUploadDocumentsModal} />
          </div>
          </NavTabsContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Profile
