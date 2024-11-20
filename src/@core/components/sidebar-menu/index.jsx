import { clsx } from 'clsx'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import menuItems from './menu-items'

const Submenu = ({children}) => {
  return (
    <ul className="sidebar-menu__sublist">
      {children}
    </ul>
  )
}

const SubmenuItem = ({ name, path }) => {
  return (
    <li className="sidebar-menu__sublist-item">
      <Link to={path}>{name}</Link>
    </li>
  )
}

const MenuItem = ({ name, path, iconClass, match }) => {
  return (
    <li className="sidebar-menu__item">
      <div className="sidebar-menu__item-wrapper">
        <div className={clsx(
          'sidebar-menu__item-icon',
          iconClass,
          {'m-blue': match}
        )}></div>
        <span className={clsx(
          'sidebar-menu__item-name',
          {'m-active': match}
        )}>
          <Link to={path}>{name}</Link>
        </span>
      </div>
    </li>
  )
}

const MenuSectionItem = ({ name, children, iconClass, match }) => {
  const [opened, setOpened] = useState(false)

  const handleOnClick = () => {
    setOpened(!opened)
  }

  return (
    <li className={clsx('sidebar-menu__item', {'m-opened': opened})}>
      <div className="sidebar-menu__item-wrapper">
        <div className={clsx(
          'sidebar-menu__item-icon',
          iconClass,
          {'m-blue': match}
        )}></div>
        <span className={clsx(
          'sidebar-menu__item-name',
          {'m-active': match}
        )} onClick={handleOnClick}>{name}</span>
        <div className={clsx(
          'sidebar-menu__arrow g-arrow',
          {'m-up': opened},
          {'m-blue': match}
        )}></div>
      </div>
      {children}
    </li>
  )
}

const createChildren = (location) => {
  let match = false
  let children = []

  menuItems.forEach((item, index) => {
    if (item.isSection) {
      let submenuItems = []

      item.pages.forEach((page, index) => {
        submenuItems.push(<SubmenuItem
          key={'submenu' + index}
          name={page.name}
          path={page.path}
          match={location.pathname === page.path}
        />)
      })
 
      match = item.pages.some((page) => location.pathname === page.path)

      children.push(
        <MenuSectionItem
          key={'menu' + index}
          name={item.name}
          iconClass={item.iconClass}
          match={match}
        >
          <Submenu>{submenuItems}</Submenu>
        </MenuSectionItem>
      )
    } else {
      children.push(
        <MenuItem
          key={'menu' + index}
          name={item.name}
          path={item.path}
          iconClass={item.iconClass}
          match={location.pathname === item.path}
        />
      )
    }
  })

  return children
}

const SidebarMenu = () => {
  const [opened, setOpened] = useState(false)
  const location = useLocation()
  const children = createChildren(location)

  const handleOnMouseEnter = () => {
    setOpened(true)
  }

  const handleOnMouseLeave = () => {
    setOpened(false)
  }

  return (
    <div 
      className={clsx(
        'sidebar-menu',
        {'m-closed': !opened}
      )}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className={clsx(
        'sidebar-menu__icon',
        {'m-closed': !opened}
      )} />
      <ul className="sidebar-menu__list">
        {children}
      </ul>
      <div className="sidebar-menu__logout"></div>
    </div>
  )
}

export default SidebarMenu