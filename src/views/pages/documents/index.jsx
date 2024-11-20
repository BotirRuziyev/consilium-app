// ** React Imports
import { useReducer, useState, useEffect } from 'react'

// ** React router
import { Link } from 'react-router-dom'

// ** Modules Imports
import { useUnit } from 'effector-react'
import clsx from 'clsx'

// ** Source code Imports
import docsStore, { getDocs } from 'src/state-manager/documents'
import { tableColumnsOpts } from './opts'
import Dropdown  from '@core/components/dropdown'
import Header from '@core/components/header'
import SidebarMenu from '@core/components/sidebar-menu'
import DocumentsTable from './documents-table'
import DocumentsFilters from './documents-filters'
import TableColumnsDropdown from './documents-table/table-columns-dropdown'
import Pagination from '@core/components/pagination'
import SerchField from './SerchField'

const limit = 25

const optionReducer = (state, { action, payload }) => {
  if (action === 'setPage') return {
    ...state,
    page: payload
  }

  if (action === 'setSearchString') return {
    ...state,
    searchString: payload
  }

  if (action === 'setCategories') return {
    ...state,
    categories: payload
  }

  if (action === 'setAuthors') return {
    ...state,
    authors: payload
  }

  if (action === 'setDateStart') return {
    ...state,
    dateStart: payload
  }

  if (action === 'setDateAcquaintedBefore') return {
    ...state,
    dateAcquaintedBefore: payload
  }

  if (action === 'setSorting') return {
    ...state,
    sorting: { ...state.sorting, ...payload }
  }

  return { ...state }
}

const Documents = () => {
  const [
    {
      page,
      searchString,
      categories,
      authors,
      dateStart,
      dateAcquaintedBefore,
      sorting
    },
    dispatch
  ] = useReducer(optionReducer, {
    page: 0,
    searchString: '',
    categories: [],
    authors: [],
    dateStart: null,
    dateAcquaintedBefore: null,
    sorting: {}
  })

  const changeOptions = (action, payload) => dispatch({ action, payload })

  const [columns, setColumns] = useState(tableColumnsOpts)
  const [activefilters, setActiveFilters] = useState(false)

  const { loading, data: docsList, count } = useUnit(docsStore.docsList)

  useEffect(() => {
    const query = { $and: [], $or: [] }

    if (searchString) query.$and.push({
      'data.Название': { $regex: searchString }
    })

    if (categories.length) query.$and.push({
      'data.Категория': { $in: categories }
    })

    if (authors.length) query.$and.push({
      'data.Автор': { $in: authors }
    })

    if (dateStart) {
      const startDay = new Date(dateStart).setHours(0, 0, 0, 0)
      const endDay = new Date(dateStart).setHours(23, 59, 59, 999)

      query.$and.push({
        'data.Начало действия': { $gte: startDay, $lte: endDay }
      })
    }

    if (dateAcquaintedBefore) {
      const startDay = new Date(dateAcquaintedBefore).setHours(0, 0, 0, 0)
      const endDay = new Date(dateAcquaintedBefore).setHours(23, 59, 59, 999)

      query.$and.push({
        'data.Ознакомиться до': { $gte: startDay, $lte: endDay }
      })
    }

    const sort = Object.entries(sorting)
      .filter(([, value]) => {
        return !!value
      })
      .map(([key, value]) => {
        const column = (
          key !== '_id' &&
          key !== 'createdAt' &&
          key !== 'updatedAt' &&
          key !== 'user'
        ) ? `data.${key}` : key

        return { sort: value, column }
      })

    getDocs({ page, limit, query, sort })
  }, [
    page,
    searchString,
    categories,
    authors,
    dateStart,
    dateAcquaintedBefore,
    sorting
  ])

  const toggleActiveFilters = () => {
    setActiveFilters((state) => !state)
  }

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
            <li className="g-breadcrumbs__item">Документы</li>
          </ul>
          <div className="documents">
            <div className="g-page-header">
              <h1 className="g-page-name">Документы</h1>
              <div className="g-button-group">
                <a
                  className="g-button m-blue"
                  href="http://publication.pravo.gov.ru/documents/block/foiv065"
                >
                  Перейти на сайт Минздрава
                </a>
              </div>
            </div>
            <div className="documents__controls">
              <SerchField
                value={searchString}
                onChange={(data) => changeOptions('setSearchString', data)}
              />
              <div className="documents__table-settings">
                <div className="documents__table-filters" onClick={toggleActiveFilters} />
                <Dropdown
                  renderButton={({ onOpen, active, buttonRef }) => (
                    <div 
                      ref={buttonRef}
                      className={clsx(
                      'documents__table-properties',
                      { 'm-active': active }
                    )}
                    onClick={onOpen}></div>
                  )}
                  content={({ onClose }) => (
                    <TableColumnsDropdown
                      items={columns}
                      onChange={(items) => setColumns(items)}
                      onClose={onClose}
                    />
                  )}
                />
              </div>
            </div>
            <DocumentsFilters
              state={activefilters}
              setState={toggleActiveFilters}
              categoriesValue={categories}
              onChangeCategories={(data) => changeOptions('setCategories', data)}
              authorsValue={authors}
              onChangeAuthors={(data) => changeOptions('setAuthors', data)}
              dateStartValue={dateStart}
              onChangeDateStart={(data) => changeOptions('setDateStart', data)}
              dateAcquaintedBeforeValue={dateAcquaintedBefore}
              onChangeDateAcquaintedBefore={(data) => changeOptions('setDateAcquaintedBefore', data)}
            />
            <DocumentsTable
              loading={loading}
              columns={columns}
              rows={docsList}
              sorting={sorting}
              setSorting={(data) => changeOptions('setSorting', data)}
            />
            {count > limit && (
              <div className="documents__pagination">
                <Pagination
                  limit={limit}
                  count={count}
                  current={page}
                  onChange={(pageNumber) => changeOptions('setPage', pageNumber)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents