// ** Source code Imports
import Login from 'src/views/pages/login'

const LoginPage = () => {
  return <Login />
}

LoginPage.meta = {
  title: 'Авторизация | Consilium-online'
}

LoginPage.guestGuard = true
LoginPage.authGuard = false

export default LoginPage
