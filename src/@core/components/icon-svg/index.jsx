// ** React Imports
import { useMemo } from 'react'

// ** Modules Imports
import parse from 'html-react-parser'

// ** Source code Imports
import icons from './icons'

const IconSvg = ({ className, icon, color = 'inherit', size }) => {
  const iconComponent = useMemo(() => {
    let iconBody = icons[icon]?.body
    if (!iconBody) return null
    iconBody = iconBody.replace('$mainColor', color)

    return parse(iconBody)
  }, [icon])

  if (!icons[icon]?.body) return null

  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      {iconComponent}
    </svg>
  )
}

export default IconSvg
