// ** React Imports
import { useEffect } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Hooks Import
import { useAuth } from '@core/hooks/useAuth'

const GuestGuard = ({ children, fallback }) => {
  const auth = useAuth()
  const navigate = useNavigate()

  const isAuthorized = !auth.loading && auth.user !== null

  useEffect(() => {
    if (isAuthorized) navigate({ pathname: '/dashboard' })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized, navigate])

  if (auth.loading || isAuthorized) return fallback

  return <>{children}</>
}

export default GuestGuard
