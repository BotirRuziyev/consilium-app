// ** React Imports
import { useEffect } from 'react'

// ** React router
import { Link } from 'react-router-dom'

// ** Modules Imports
import { useUnit } from 'effector-react'
import parse from 'html-react-parser'

// ** Source code Imports
import { getFileLink } from 'src/tools/emd/uploader'
import docStore, { getDoc } from 'src/state-manager/document'
import Header from '@core/components/header'
import SidebarMenu from '@core/components/sidebar-menu'
import DocumentViewInfo from './document-view-info'
// import DocumentViewRead from './document-view-read'
import DocumentViewConfirmation from './document-view-confirmation'
import DocumentViewComments from './document-view-comments'



const DocumentView = ({ id }) => {
  const { loading, details } = useUnit(docStore.docView)

  useEffect(() => {
    getDoc({ id })
  }, [id])

  const name = details?.['Название'] || 'Без названия'
  const content = details?.['Контент'] || '-'
  const fileLink = details?.['Файл'] && getFileLink(details['Файл'], 'attachment')

  return (
    <div className="layout-wrapper">
      <SidebarMenu />
      <div className="main">
        <Header />
        <div className="content">
          <ul className="g-breadcrumbs">
            <li className="g-breadcrumbs__item">
              <Link to='/home'>Главная</Link>
            </li>
            <li className="g-breadcrumbs__item">
              <Link to='/documents'>Документы</Link>
            </li>
            <li className="g-breadcrumbs__item">Документ</li>
          </ul>
          {loading ? (
            <div>Загрузка...</div>
          ) : (
            <div className="document-view">
              <div className="g-page-header">
                <h1 className="g-page-name m-small">
                  {name}
                </h1>
                <div className="g-button-group">
                  <span className="g-add-to-favorites document-view__add-to-favorites">Пометить избранным</span>
                  {fileLink && (
                    <a className="g-button" href={fileLink} download>
                      Скачать
                    </a>
                  )}
                </div>
              </div>
              <div className="document-view__wrapper">
                <div className="document-view__left-section">
                  <DocumentViewInfo details={details} />
                  {/* <DocumentViewRead /> */}
                </div>
                <div className="document-view__document-text">
                  <h3 className="document-view__document-text-header">Текст документа</h3>
                  <p className="document-view__document-text-content">
                    {parse(content)}
                  </p>
                </div>
                <div className="document-view__right-section">
                  <DocumentViewConfirmation />
                  <DocumentViewComments details={details} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DocumentView