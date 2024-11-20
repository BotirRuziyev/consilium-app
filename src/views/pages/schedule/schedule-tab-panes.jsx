import ScheduleTableMedics from './schedule-table/schedule-table-medics'
import ScheduleTableDrivers from './schedule-table/schedule-table-drivers'
import ScheduleTableAdministration from './schedule-table/schedule-table-administration'
import { NavTabsContext } from '@core/context/NavTabsContext'
import { useContext } from 'react'

const ScheduleTabPanes = () => {
  const { tabIndex } = useContext(NavTabsContext)

  return {
    1: <ScheduleTableMedics />,
    2: <ScheduleTableDrivers />,
    3: <ScheduleTableAdministration />
  }[tabIndex] ?? <ScheduleTableMedics />
}

export default ScheduleTabPanes