// ** Modules Imports
import dayjs from 'dayjs'

const DocumentViewInfo = ({ details }) => {
  const category = details?.['Категория'] || '-'
  const readLimit = details?.['Ознакомиться до']
    ? dayjs(details['Ознакомиться до']).format('DD.MM.YYYY')
    : '-'
  const author = details?.['Автор'] || '-'
  const startOfAction = details?.['Начало действия']
    ? dayjs(details['Начало действия']).format('DD.MM.YYYY')
    : '-'
  const endOfAction = details?.['Окончание действия']
    ? dayjs(details['Окончание действия']).format('DD.MM.YYYY')
    : 'Не ограничен'

  return (
    <ul className="document-view__info">
      <li className="document-view__info-item">
        <h6 className="document-view__info-item-header">Категория</h6>
        <p className="document-view__info-item-text">
          {category}
        </p>
      </li>
      <li className="document-view__info-item">
        <h6 className="document-view__info-item-header m-important">Ознакомиться до</h6>
        <p className="document-view__info-item-text">
          {readLimit}
        </p>
      </li>
      <li className="document-view__info-item m-fullwidth">
        <h6 className="document-view__info-item-header">Автор</h6>
        <p className="document-view__info-item-text">
          {author}
        </p>
      </li>
      <li className="document-view__info-item">
        <h6 className="document-view__info-item-header">Начало действия</h6>
        <p className="document-view__info-item-text">
          {startOfAction}
        </p>
      </li>
      <li className="document-view__info-item">
        <h6 className="document-view__info-item-header">Окончание действия</h6>
        <p className="document-view__info-item-text">
          {endOfAction}
        </p>
      </li>
    </ul>
  )
}

export default DocumentViewInfo