// ** Source code Imports
import Documents from 'src/views/pages/documents'

const DocumentsPage = () => {
  return <Documents />
}

DocumentsPage.meta = {
  title: 'Документы | Consilium-online'
}

DocumentsPage.guestGuard = false
DocumentsPage.authGuard = true

export default DocumentsPage