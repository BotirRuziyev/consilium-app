// ** Modules Imports
import { useParams } from 'react-router-dom'

// ** Source code Imports
import DocumentView from 'src/views/pages/documents/document-view'

const DocumentViewPage = () => {
  const { id } = useParams()

  return <DocumentView id={id} />
}

DocumentViewPage.meta = {
  title: 'Документ | Consilium-online'
}

DocumentViewPage.guestGuard = false
DocumentViewPage.authGuard = true

export default DocumentViewPage