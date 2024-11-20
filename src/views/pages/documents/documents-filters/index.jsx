// ** Modules Imports Imports
import clsx from 'clsx'

// ** Source code Imports
import Dropdown  from '@core/components/dropdown'
import Datepicker from '@core/components/datepicker'
import DocumentsFiltersCategoryDropdown from './DocumentsFiltersCategoryDropdown'
import DocumentsFiltersAuthorDropdown from './DocumentsFiltersAuthorDropdown'
import DropdownChip from './DropdownChip'

const DocumentsFilters = ({
  state,
  setState,
  categoriesValue,
  onChangeCategories,
  authorsValue,
  onChangeAuthors,
  dateStartValue,
  onChangeDateStart,
  dateAcquaintedBeforeValue,
  onChangeDateAcquaintedBefore
}) => {
  const toggleState = () => {
    setState(!state)
  }

  return (
    <div className={clsx(
      'documents-filters',
      { 'm-hidden': !state }
    )}>
      <div className="documents-filters__head">
        <div className="documents-filters__header">
          <h3 className="documents-filters__header-text">Фильтры</h3>
        </div>
        <div className="documents-filters__close" onClick={ toggleState }></div>
      </div>
      <ul className="documents-filters__buttons">
        <li className="documents-filters__button">
          <Dropdown
            renderButton={({ onOpen, active , buttonRef }) => (
              <DropdownChip
                ref={buttonRef}
                title="Категории"
                active={active}
                filled={!!categoriesValue.length}
                onOpen={onOpen}
                onReset={() => onChangeCategories([])}
              />
            )}
            content={({onClose}) => (
              <DocumentsFiltersCategoryDropdown
                value={categoriesValue}
                onClose={onClose}
                onChange={onChangeCategories}
              />
            )}
          />
        </li>
        <li className="documents-filters__button">
          <Dropdown
            renderButton={({ onOpen, active , buttonRef }) => (
                <DropdownChip
                  ref={buttonRef}
                  title="Авторы"
                  active={active}
                  filled={!!authorsValue.length}
                  onOpen={onOpen}
                  onReset={() => onChangeAuthors([])}
                />
            )}
            content={({onClose}) => (
              <DocumentsFiltersAuthorDropdown
                value={authorsValue}
                onClose={onClose}
                onChange={onChangeAuthors}
              />
            )}
          />
        </li>
        <li className="documents-filters__button">
          <Dropdown
            renderButton={({ onOpen, active , buttonRef }) => (
              <DropdownChip
                ref={buttonRef}
                title="Начало действия"
                active={active}
                filled={!!dateStartValue}
                onOpen={onOpen}
                onReset={() => onChangeDateStart(null)}
              />
            )}
            content={({ onClose }) => (
              <Datepicker
                value={dateStartValue}
                onClose={onClose}
                onChange={(date) => {
                  const foramtedDate = date.format('YYYY-MM-DD')
                  onChangeDateStart(foramtedDate)
                }}
              />
            )}
          />
        </li>
        <li className="documents-filters__button">
          <Dropdown
            renderButton={({ onOpen, active , buttonRef }) => (
              <DropdownChip
                ref={buttonRef}
                title="Ознакомиться до"
                active={active}
                filled={!!dateAcquaintedBeforeValue}
                onOpen={onOpen}
                onReset={() => onChangeDateAcquaintedBefore(null)}
              />
            )}
            content={({ onClose }) => (
              <Datepicker
                value={dateAcquaintedBeforeValue}
                onClose={onClose}
                onChange={(date) => {
                  const foramtedDate = date.format('YYYY-MM-DD')
                  onChangeDateAcquaintedBefore(foramtedDate)
                }}
              />
            )}
          />
        </li>
      </ul>
      {(
        !!categoriesValue.length ||
        !!authorsValue.length ||
        !!dateStartValue ||
        !!dateAcquaintedBeforeValue
      ) && (
        <button
          className="g-button m-noborder documents-filters__clear-button"
          onClick={() => {
            onChangeCategories([])
            onChangeAuthors([])
            onChangeDateStart(null)
            onChangeDateAcquaintedBefore(null)
          }}
        >
          Очистить фильтры
        </button>
      )}
    </div>
  )
}

export default DocumentsFilters