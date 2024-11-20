// ** React Imports
import { useState, useEffect } from 'react'

// ** Modules Imports
import { useUnit } from 'effector-react'

// ** Source code Imports
import userDocsStore, { getUserDocs } from 'src/state-manager/user-documents'

// ** Source code Imports
import { getFileLink } from 'src/tools/emd/uploader'
import Pagination from '@core/components/pagination'

const limit = 50

const ProfileDocs = () => {
  const [page, setPage] = useState(0)

  const { loading, data, count } = useUnit(userDocsStore.userDocsList)

  useEffect(() => {
    getUserDocs({ limit, page })
  }, [page])

  if (loading) return <p>Загрузка...</p>

  return (
    <div className="profile-docs">
      <ul className="profile-docs__list">
        {!data.length && (
          <p>Пусто</p>
        )}
        {data.map(({ _id, data }) => (
          <li key={_id} className="profile-docs__item">
            <div className="profile-docs__card">
              <div className="profile-docs__container">
                <svg className="profile-docs__icon" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.4551 14.7363L22.8906 1.04004C22.6709 0.820312 22.4316 0.634766 22.1728 0.478516C22.1045 0.439453 22.0361 0.400391 21.9629 0.366211C21.9189 0.341797 21.8701 0.322266 21.8262 0.302734C21.3867 0.107422 20.9033 0 20.4102 0H3.56445C1.62109 0 0 1.57227 0 3.51562V46.4844C0 48.4277 1.62109 50 3.56445 50H33.9844C35.9277 50 37.4512 48.4277 37.4512 46.4844V17.2119C37.4512 16.2842 37.1094 15.3955 36.4551 14.7363ZM22.2168 5.39062L32.0215 15.2344H22.2168V5.39062ZM33.9355 46.4844H3.51562V3.51562H18.7012V15.2344C18.7012 17.1777 20.3223 18.75 22.2656 18.75H33.9355V46.4844Z" />
                </svg>
                <a
                  className="profile-docs__name"
                  rel="noreferrer"
                  href={getFileLink(data?.['Ссылка'])}
                  target="_blank"
                >
                  {data?.['Название']}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {count > limit && (
        <Pagination
          limit={limit}
          count={count}
          current={page}
          onChange={(page) => setPage(page)}
        />
      )}
    </div>
  )
}
export default ProfileDocs