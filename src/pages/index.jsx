// ** React Imports
import { Fragment } from 'react'

// ** Router imports
import { useRoutes } from 'react-router-dom'

// ** Source code Imports
import Spinner from '@core/components/spinner'
import DefautLayout from '@layouts/default-layout'
import GuestGuard from '@core/components/auth/GuestGuard'
import AuthGuard from '@core/components/auth/AuthGuard'
import Head from '@core/components/head'

// ** Pages
import GeneralPage from './general'
import NotFoundPage from './not-found'
import DashboardPage from './dashboard'
import LoginPage from './login'
import RegistrationPage from './registration'
import ProfilePage from './profile'
import DocumentsPage from './documents'
import DocumentViewPage from './document-view'
import DetailPage from './detail'
import SchedulePage from './schedule'

const Guard = ({ children, guestGuard, authGuard }) => {
  if (guestGuard) return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  if (authGuard) return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>

  return <Fragment>{children}</Fragment>
}

const Page = ({ component }) => {
  const PageComponent = component
  const getLayout = component.getLayout ?? (page => <DefautLayout>{page}</DefautLayout>)
  const title = component.meta.title ?? 'Consilium-online'
  const description = component.meta.description ?? 'Ускоряем скорую'

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Guard
        guestGuard={component.guestGuard ?? false}
        authGuard={component.authGuard ?? false}
      >
        {getLayout(<PageComponent />)}
      </Guard>
    </Fragment>
  )
}

const Pages = () => {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <GeneralPage guestPath="/login" authenticatedPath="/dashboard" />,
        },
        {
          path: '*',
          element: <Page component={NotFoundPage} />,
        },
        {
          path: '/dashboard',
          element: <Page component={DashboardPage} />,
        },
        {
          path: '/login',
          element: <Page component={LoginPage} />,
        },
        {
          path: '/registration',
          element: <Page component={RegistrationPage} />,
        },
        {
          path: '/profile',
          element: <Page component={ProfilePage} />
        },
        {
          path: '/documents',
          element: <Page component={DocumentsPage} />
        },
        {
          path: '/documents/:id',
          element: <Page component={DocumentViewPage} />
        },
        {
          path: '/detail',
          element: <Page component={DetailPage} />
        },
        {
          path: '/schedule',
          element: <Page component={SchedulePage} />
        },
      ],
    }
  ])
}

export default Pages
