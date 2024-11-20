import { useState, useEffect, useRef } from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef(null)

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
      const modalElement = modalRef.current

      if (modalElement) {
        if (isModalOpen) {
          modalElement.showModal()
        }
        else {
          modalElement.close()
        }
      }
  }, [isModalOpen])

  return (
    <dialog ref={modalRef} className="g-modal">
      <div className="g-modal__close" onClick={onClose}></div>
      {children}
    </dialog>
  )
}

export default Modal