import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.jsx'
import BackendContexProvider from './context/ConnectBackendContex.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <BackendContexProvider>
      <EventContextProvider>
        <App />
      </EventContextProvider>
    </BackendContexProvider>
  </BrowserRouter>
)
