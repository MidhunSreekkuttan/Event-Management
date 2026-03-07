import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StaffContextProvider from './context/staffContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StaffContextProvider>
      <App />
    </StaffContextProvider>
  </BrowserRouter>,
)
