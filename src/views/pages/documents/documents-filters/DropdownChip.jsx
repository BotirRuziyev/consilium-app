// ** React Imports
import { forwardRef } from 'react'

// ** Modules Imports
import clsx from 'clsx'

// ** Source code Imports
import IconSvg from 'src/@core/components/icon-svg'

const DropdownChip = forwardRef((
  {
    title,
    active,
    onOpen,
    onReset,
    filled
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'g-dropdown-button',
        {
          'm-active': active,
          'm-filled': filled
        }
      )}
      onClick={onOpen}
    >
      <span>{title}</span>
      {filled ? (
        <div
          className="documents-filters__close-icon"
          onClick={(evt) => {
            evt.stopPropagation()
            onReset()
          }}
        >
          <IconSvg size={16} icon="close" color="#202022" />
        </div>
      ) : (
        <IconSvg size={16} icon={active ?'arrow-up' : 'arrow-down'} color="#202022" />
      )}
    </button>
  )
})

export default DropdownChip
