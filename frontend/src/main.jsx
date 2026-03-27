import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.jsx'
import BackendContexProvider from './context/ConnectBackendContex.jsx'
import './index.css'
import App from './App.jsx'
import EventManagementContextProvider from './context/EventManagementContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WorkersContextProvider from './context/WorkersContext.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <BackendContexProvider>
      <EventContextProvider>
        <EventManagementContextProvider>
          <WorkersContextProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </WorkersContextProvider>
        </EventManagementContextProvider>
      </EventContextProvider>
    </BackendContexProvider>
  </BrowserRouter>
)
