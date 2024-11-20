import ScheduleView from 'src/views/pages/schedule'

const ScheduleViewPage = () => {
  return <ScheduleView />
}

ScheduleViewPage.meta = {
  title: 'Расписание | Consilium-online'
}

ScheduleViewPage.guestGuard = false
ScheduleViewPage.authGuard = true

export default ScheduleViewPage