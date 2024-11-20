import DetailView from 'src/views/pages/detail'

const DetailViewPage = () => {
  return <DetailView />
}

DetailViewPage.meta = {
  title: 'Дежурный наряд | Consilium-online'
}

DetailViewPage.guestGuard = false
DetailViewPage.authGuard = true

export default DetailViewPage