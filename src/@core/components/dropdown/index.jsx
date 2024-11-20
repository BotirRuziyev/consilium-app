import { useLayoutEffect, useState, useRef, Fragment } from 'react'
import { createPortal } from 'react-dom'

const Dropdown = ({
  renderButton,
  content,
}) => {
  const [active, setActive]  = useState(false)
  const [position, setPosition]  = useState(false)
  
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  const onOpen = () => setActive((state) => !state)

  useLayoutEffect(() => {
    if (buttonRef?.current && dropdownRef?.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const dropdownRect = dropdownRef.current.getBoundingClientRect()

      const top = buttonRect.bottom + dropdownRect.height > window.innerHeight
        ? buttonRect.top - dropdownRect.height
        : buttonRect.bottom
      const left = buttonRect.left + dropdownRect.width > window.innerWidth
        ? buttonRect.right - dropdownRect.width
        : buttonRect.left

      setPosition({ top, left })
    }

    const close = (evt) => {
      if (!dropdownRef.current.contains(evt.target) && !buttonRef.current.contains(evt.target)) {
        setActive(false)
      }
    }

    // add or remove event listener
    if (active) {
      window.addEventListener('click', close, { capture: true })
    }

    // cleanup
    return () => {
      window.removeEventListener('click', close, { capture: true })
    }
  }, [active])

  const renderContent = () => (
    <div
      ref={dropdownRef}
      style={{ position: 'absolute', ...position }}
    >
      {content({ onClose: () => setActive(false) })}
    </div>
  )

  return (
    <Fragment>
      {renderButton({ onOpen, active, buttonRef })}
      {active && createPortal(renderContent(), document.body)}
    </Fragment>
  )
}

export default Dropdown