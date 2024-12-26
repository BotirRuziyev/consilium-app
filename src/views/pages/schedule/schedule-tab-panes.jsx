import ScheduleTableMedics from './schedule-table/schedule-table-medics';
import ScheduleTableDrivers from './schedule-table/schedule-table-drivers';
import ScheduleTableAdministration from './schedule-table/schedule-table-administration';
import ScheduleTableArchive from './schedule-table/schedule-table-archive';
import { NavTabsContext } from '@core/context/NavTabsContext';
import { useContext } from 'react';

const ScheduleTabPanes = ({ onSendCheckbox }) => {
  const { tabIndex } = useContext(NavTabsContext);

  switch (tabIndex) {
    case 1:
      return <ScheduleTableMedics onSend={onSendCheckbox} />;
    case 2:
      return <ScheduleTableDrivers onSend={onSendCheckbox} />;
    case 3:
      return <ScheduleTableAdministration />;
    case 4:
      return <ScheduleTableArchive onSend={onSendCheckbox} />;
    default:
      return <ScheduleTableMedics onSend={onSendCheckbox} />;
  }
};

export default ScheduleTabPanes;
