// ** React Imports
import { useEffect, Fragment } from 'react'

// ** Router Imports
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

// ** Hooks Imports
import { useAuth } from '@core/hooks/useAuth'

// ** Source code Imports
import AccountRegectedPage from 'src/views/pages/account-rejected'

const AuthGuard = ({ children, fallback }) => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.loading) return

    if (auth.user === null) {
      navigate({
        pathname: '/login',
        search: createSearchParams({
          returnUrl: location.pathname
        }).toString()
      })
    }
  }, [location, navigate, auth])

  if (auth.loading || auth.user === null) return fallback
  if (auth.user.accountStatus === 'rejected') return <AccountRegectedPage />

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default AuthGuard
