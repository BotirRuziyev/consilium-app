// ** React Imports
import { useState, useEffect } from 'react'

// ** Modules Imports
import { useUnit } from 'effector-react'
import dayjs from 'dayjs'

// ** Source code Imports
import workCommentsStore, { getWorkComments } from 'src/state-manager/work-comments'
import Pagination from '@core/components/pagination'

const limit = 15

const ProfileComments = () => {
  const [page, setPage] = useState(0)

  const { loading, data, count } = useUnit(workCommentsStore.workCommentsList)

  useEffect(() => {
    getWorkComments({ limit, page })
  }, [page])

  if (loading) return <p>Загрузка...</p>

  return (
    <div className="profile-comments">
      <ul className="profile-comments__list">
        {data.map((item) => (
          <li key={item._id} className="profile-comments__item">
            <h5 className="profile-comments__header m-important">
              {item.data['Заголовок']}
            </h5>
            <span className="profile-comments__date">
              {dayjs(item.createdAt).format('LLL')}
            </span>
            <p className="profile-comments__comment">
              {item.data['Текст']}
            </p>
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

export default ProfileComments