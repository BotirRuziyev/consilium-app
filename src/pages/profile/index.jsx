// ** Source code Imports
import Profile from 'src/views/pages/profile'

const ProfilePage = () => {
  return <Profile />
}

ProfilePage.meta = {
  title: 'Профиль | Consilium-online'
}

ProfilePage.guestGuard = false
ProfilePage.authGuard = true

export default ProfilePage
