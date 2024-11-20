// ** React Imports
import { useMemo } from 'react'

// ** Modules Imports
import clsx from 'clsx'

const Pagination = ({
  limit,
  count,
  current,
  onChange
}) => {
  const pagesCount = useMemo(() => Math.ceil(count / limit), [count, limit])
  const paginationNumbers = useMemo(() => {
    return [...Array(pagesCount)].map((_item, index) => ++index)
  }, [pagesCount])

  return(
    <nav className="g-pagination">
      <ul className="g-pagination__list">
        {current !== 0 && (
          <li className="g-pagination__item g-pagination__prev">
            <div className="g-arrow m-left" onClick={() => onChange(current - 1)} />
          </li>
        )}
        {paginationNumbers.map((pageNumber, index) => (
          <li
            key={index}
            className={clsx(
              'g-pagination__item',
              'g-pagination__number',
              { 'g-pagination__current': index === current }
            )}
            onClick={() => onChange(index)}
          >
            {pageNumber}
          </li>
        ))}
        {current !== pagesCount - 1 && (
          <li className="g-pagination__item g-pagination__next">
            <div className="g-arrow m-right" onClick={() => onChange(current + 1)} />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination