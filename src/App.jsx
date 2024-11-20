// ** MUI Imports
import { ThemeProvider } from '@mui/material/styles'

// ** Moodules Imports
import dayjs from 'dayjs'
import localizedFormat  from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ru'

// ** Router Imports
import { BrowserRouter } from 'react-router-dom'

// ** Pages Imports
import Pages from 'src/pages/index.jsx'

// ** Source code Imports
import { AuthProvider } from '@core/context/AuthContext'
import themeConfig from '@core/theme'

dayjs.locale('ru')
dayjs.extend(localizedFormat)

const App = () => {
  return (
   <ThemeProvider theme={themeConfig}>
    <BrowserRouter>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
