// ** Modules Imports
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import clsx from 'clsx'

// ** Source code Imports
import IconSvg from 'src/@core/components/icon-svg'

const DocumentsTable = ({
  loading,
  columns,
  rows,
  sorting,
  setSorting
}) => {
  const navigate = useNavigate()

  if (loading) return <div>Загрузка...</div>

  return (
    <>
      <table className="g-table">
        <thead>
          <tr>
            {columns.map((column, index) => {
              if (!column.visible) return null

              const handleChangeSorting = () => {
                if (!column.sorting) return

                if (!sorting?.[column.name]) setSorting({ [column.name]: 'asc' })
                if (sorting[column.name] === 'asc') setSorting({ [column.name]: 'desc' })
                if (sorting[column.name] === 'desc') setSorting({ [column.name]: undefined })
              }

              const iconSorting = {
                undefined: 'sort-default',
                asc: 'sort-asc',
                desc: 'sort-desc'
              }[sorting?.[column.name]]

              return (
                <th key={`column-${index}`}>
                  <div
                    className="g-table__heading"
                    onClick={handleChangeSorting}
                  >
                    <span className="g-table__column-name">
                      {column.name}
                    </span>
                    {column.sorting && (
                      <IconSvg
                        className={clsx('g-table__icon')}
                        size={24}
                        icon={iconSorting}
                        color="black"
                      />
                    )}
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ _id, data }) => (
            <tr
              key={_id}
              className="documents-table__row"
              onClick={() => navigate(`/documents/${_id}`)}
            >
              {columns.map((column, index) => {
                if (!column.visible) return null

                if (column.name === 'Статус') return (
                  <td
                    key={`row-${index}`}
                    className="documents-table__important"
                  >
                    <div className="g-icon-star" />
                  </td>
                )

                const value = {
                  'Название': data?.['Название'] || 'Без названия',
                  'Категория': data?.['Категория'] || '-',
                  'Начало действия': data?.['Начало действия']
                    ? dayjs(data?.['Начало действия']).format('DD.MM.YYYY')
                    : '-',
                  'Ознакомиться до': data?.['Ознакомиться до']
                    ? dayjs(data?.['Ознакомиться до']).format('DD.MM.YYYY')
                    : '-',
                  'Ознакомленные': data?.['Дожности'].join(', '),
                  'Автор': data?.['Автор'] || '-',
                  'Ознакомились': '250 / 1259'
                }?.[column.name] ?? data?.[column.name]

                const classPostscript = {
                  'Название': 'name',
                  'Категория': 'category',
                  'Начало действия': 'start-date',
                  'Ознакомиться до': 'end-date',
                  'Ознакомленные': 'audience',
                  'Ознакомились': 'introduced'
                }?.[column.name] ?? 'other'

                return (
                  <td
                    key={`row-${index}`}
                    className={`documents-table__${classPostscript}`}
                  >
                    {value}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DocumentsTable