import Dashboard from 'src/views/pages/dashboard'

const DashboardPage = () => {
  return <Dashboard />
}

DashboardPage.guestGuard = false
DashboardPage.authGuard = true

DashboardPage.meta = {
  title: 'Главная | Consilium-online'
}

export default DashboardPage
