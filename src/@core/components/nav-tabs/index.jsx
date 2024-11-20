import { useState, useContext } from 'react'
import { NavTabsContext } from '@core/context/NavTabsContext'

const NavTabs = ({ tabsData }) => {
  const [active, setActive] = useState(1)
  const [dataTabs, setDataTabs] = useState(tabsData)
  const {tabIndex, setTabIndex} = useContext(NavTabsContext)

  const NavLink = ({ id, tabTitle, isActive, onClick }) => {
    return (
      <span
        onClick={() => navigate(id)}
        className={"g-nav-tabs__button" + (isActive ? " m-active" : "")}
      >
        {tabTitle}
      </span>
    )
  }

  const navigate = (id) => {
    setActive(id)
    setTabIndex(id)
  }

  return (
    <ul className="g-nav-tabs">
      {dataTabs.map((item) => (
        <li key={item.id} className="g-nav-tabs__item">
          <NavLink {...item} isActive={active === item.id} onClick={navigate} />
        </li>
      ))}
    </ul>
  )
}

export default NavTabs