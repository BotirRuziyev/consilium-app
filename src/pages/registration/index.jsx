// ** Source code Imports
import Registration from 'src/views/pages/registration'

const RegistrationPage = () => {
  return <Registration />
}

RegistrationPage.meta = {
  title: 'Регистрация | Consilium-online'
}

RegistrationPage.guestGuard = true
RegistrationPage.authGuard = false

export default RegistrationPage
