import { useState } from 'react'
import { NavTabsContext } from '@core/context/NavTabsContext'
import Header from '@core/components/header'
import SidebarMenu from '@core/components/sidebar-menu'
import NavTabs from '@core/components/nav-tabs'
// import ScheduleTableMedics from './schedule-table/schedule-table-medics'
import ScheduleTabPanes from './schedule-tab-panes'
import NavDateTabs from '../../../@core/components/nav-tab-data-filter'

import pencil from '@assets/icons/pencil-alt.svg'
import trash from '@assets/icons/trash.svg'
import printer from '@assets/icons/printer.svg'
import settings from '@assets/icons/settings.svg'

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
  },
  {
    id: 4,
    name: 'archive',
    tabTitle: 'Архив'
  }
]
const tabsDate = [
    {
      id: 1,
      name: 'monthone',
      tabTitle: 'Ноябрь 2023'
    },
    {
      id: 2,
      name: 'monthtwo',
      tabTitle: 'Декабрь 2023'
    },
    {
      id: 3,
      name: 'monthtree',
      tabTitle: 'Январь 2024'
    },
    {
      id: 4,
      name: 'monthfour',
      tabTitle: 'Февраль 2024'
    },
    {
      id: 5,
      name: 'monthfive',
      tabTitle: 'Март 2024'
    }
  ]

const Schedule = () => {
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
            <li className="g-breadcrumbs__item">Расписание</li>
          </ul>
          <NavTabsContext.Provider value={{tabIndex, setTabIndex}}>
          <div className="schedule">
            <div className="g-page-header">
              <h1 className="g-page-name">Расписание</h1>
              <NavTabs tabsData={tabs} />
              <div className="g-button-group">
                <button className="g-button">Пересчитать</button>
                <button className="g-button m-blue">Табелировать</button>
              </div>
            </div>
            <div className="g-page-table-head">
                <NavDateTabs tabsData={tabsDate} />
                <div className="g-page-table-head-button-wrapper">
                  <button className='g-page-table__button'>
                    <img src={pencil} alt="" />
                  </button>
                  <button className='g-page-table__button'>
                    <img src={trash} alt="" />
                  </button>
                  <button className='g-page-table__button'>
                    <img src={printer} alt="" />
                  </button>
                  <button className='g-page-table__button'>
                    <img src={settings} alt="" />
                  </button>
                </div>
            </div>
            <ScheduleTabPanes />
          </div>
          </NavTabsContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Schedule