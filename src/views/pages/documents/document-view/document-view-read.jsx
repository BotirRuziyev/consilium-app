import readDoneIcon from '@assets/icons/people.svg'
import avatarPlaceholder from '@assets/icons/avatar-placeholder.svg'
import { useState } from 'react'
import { clsx } from 'clsx'

const DocumentViewRead = () => {
  const [showList, setShowList] = useState(false)

  const handleShowList = () => {
    setShowList(!showList)
  }
  
  return (
    <div className="document-view__read">
      <div className="document-view__read-done">
        <p className="document-view__read-done-count">
          Процент ознакомившихся
          <br/>
          <span>89 %</span>
        </p>
        <img className="document-view__read-done-icon" src={readDoneIcon} alt="" />
      </div>
      <div className="document-view__read-todo">
        <div className="document-view__read-todo-head" onClick={handleShowList}>
          <h6 className="document-view__read-todo-header">Список неознакомившихся</h6>
          <div className={clsx(
            'g-arrow',
            {'m-up': !showList}
          )}></div>
        </div>
        <div className={clsx(
          'document-view__read-todo-list-wrapper',
          {'m-hidden': !showList} 
        )}>
          <ul className="document-view__read-todo-list">
            <li className="document-view__read-todo-item">
              <img className="document-view__read-todo-avatar" src={avatarPlaceholder} alt="" />
              <span className="document-view__read-todo-name">Иванов И. И.</span>
            </li>
            <li className="document-view__read-todo-item">
              <img className="document-view__read-todo-avatar" src={avatarPlaceholder} alt="" />
              <span className="document-view__read-todo-name">Огурцов О. О.</span>
            </li>
            <li className="document-view__read-todo-item">
              <img className="document-view__read-todo-avatar" src={avatarPlaceholder} alt="" />
              <span className="document-view__read-todo-name">Винченко В. И.</span>
            </li>
          </ul>
          <div className="document-view__read-todo-remind">
            <button className="g-button" type="button" name="button">Напомнить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentViewRead