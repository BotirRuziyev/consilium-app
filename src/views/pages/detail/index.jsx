import { useState } from 'react'
import { NavTabsContext } from '@core/context/NavTabsContext'
import Header from '@core/components/header'
import SidebarMenu from '@core/components/sidebar-menu'
import NavTabs from '@core/components/nav-tabs'
// import DetailTableMedics from './detail-table/detail-table-medics'
import DetailTabPanes from './detail-tab-panes'

const tabs = [
  {
    id: 1,
    name: 'medics',
    tabTitle: 'Медицинские  работники'
  },
  {
    id: 2,
    name: 'drivers',
    tabTitle: 'Водители'
  },
  {
    id: 3,
    name: 'administration',
    tabTitle: 'АХЧ'
  }
]

const Detail = () => {
  const [tabIndex, setTabIndex] = useState(1)
  
  return (
    <div className="layout-wrapper">
      <SidebarMenu />
      <div className="main">
        <Header />
        <div className="content">
          <ul className="g-breadcrumbs">
            <li className="g-breadcrumbs__item">Главная</li>
            <li className="g-breadcrumbs__item">Планирование</li>
            <li className="g-breadcrumbs__item">Дежурный наряд</li>
          </ul>
          <NavTabsContext.Provider value={{tabIndex, setTabIndex}}>
          <div className="detail">
            <div className="g-page-header">
              <h1 className="g-page-name">Дежурный наряд</h1>
              <NavTabs tabsData={tabs} />
              <div className="g-button-group">
                <button className="g-button">Добавить замечание</button>
                <button className="g-button">Добавить смену</button>
                <button className="g-button m-blue">Добавить бригаду</button>
              </div>
            </div>
            <DetailTabPanes />
          </div>
          </NavTabsContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Detail