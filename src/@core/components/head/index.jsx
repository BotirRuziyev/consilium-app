// ** React Imports
import { createPortal } from 'react-dom'

const Head = ({ children }) => {
  return createPortal(children, document.head)
}

export default Head
