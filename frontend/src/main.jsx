import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.jsx'
import BackendContexProvider from './context/ConnectBackendContex.jsx'
import './index.css'
import App from './App.jsx'
import EventManagementContextProvider from './context/EventManagementContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <BackendContexProvider>
      <EventContextProvider>
        <EventManagementContextProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
        </EventManagementContextProvider>
      </EventContextProvider>
    </BackendContexProvider>
  </BrowserRouter>
)
