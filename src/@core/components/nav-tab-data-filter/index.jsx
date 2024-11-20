import { useState } from 'react'
import plus from '../../../@assets/icons/plus.svg'

const NavDateTabs = ({ tabsData }) => {
  const [active, setActive] = useState(1)
  const [dataTabs, setDataTabs] = useState(tabsData)

  const NavLink = ({ id, tabTitle, isActive, onClick }) => {
    return (
      <span
        onClick={() => navigate(id)}
        className={"g-nav-date-tabs__button" + (isActive ? " m-active" : "")}
      >
        {tabTitle}
      </span>
    )
  }

  const navigate = (id) => {
    setActive(id)
  }

  return (
    <ul className="g-nav-date-tabs">
      {dataTabs.map((item) => (
        <li key={item.id} className="g-nav-date-tabs__item">
          <NavLink {...item} isActive={active === item.id} onClick={navigate} />
        </li>
      ))}
        <li className='g-nav-date-tabs__item'>
            <span className='g-nav-date-tabs__add'>
                <img src={plus} alt="" />
            </span>
        </li>
    </ul>
  )
}

export default NavDateTabs