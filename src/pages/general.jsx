// ** React Imports
import { useEffect } from 'react'

// ** Router Imports
import { useNavigate } from 'react-router-dom'

// ** Spinner Import
import Spinner from '@core/components/spinner'

// ** Hook Imports
import { useAuth } from '@core/hooks/useAuth'

const GeneralPage = ({ guestPath, authenticatedPath }) => {
  // ** Hooks
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.loading) return

    const homeRoute = !auth.user ? guestPath : authenticatedPath

    navigate(homeRoute, { replace: true })
  }, [navigate, auth, guestPath, authenticatedPath])

  return <Spinner  />
}

export default GeneralPage
