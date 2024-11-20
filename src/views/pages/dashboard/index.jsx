import SidebarMenu from '@core/components/sidebar-menu'
import Header from '@core/components/header'

const Dashboard = () => {
  return (
    <div className="layout-wrapper">
      <SidebarMenu />
      <div className="main">
        <Header />
        <div className="content">
          <div className="documents">
            <div className="g-page-header">
              <h1 className="g-page-name">Главная</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard