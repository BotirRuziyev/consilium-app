import ProfileInfo from './profile-info'
import ProfileDocs from './profile-docs'
import ProfileComments from './profile-comments'
import { NavTabsContext } from '@core/context/NavTabsContext'
import { useContext } from 'react'

const ProfileTabPanes = () => {
  const { tabIndex } = useContext(NavTabsContext)

  return {
    1: <ProfileInfo />,
    2: <ProfileDocs />,
    3: <ProfileComments />
  }[tabIndex] ?? <ProfileInfo />
}

export default ProfileTabPanes
