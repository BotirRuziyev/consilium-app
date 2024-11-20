import DetailTableMedics from './detail-table/detail-table-medics'
import DetailTableDrivers from './detail-table/detail-table-drivers'
import DetailTableAdministration from './detail-table/detail-table-administration'
import { NavTabsContext } from '@core/context/NavTabsContext'
import { useContext } from 'react'

const DetailTabPanes = () => {
  const { tabIndex } = useContext(NavTabsContext)

  return {
    1: <DetailTableMedics />,
    2: <DetailTableDrivers />,
    3: <DetailTableAdministration />
  }[tabIndex] ?? <DetailTableMedics />
}

export default DetailTabPanes