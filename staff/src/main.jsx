import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import StaffContextProvider from './context/staffContext.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import axios from 'axios'

axios.defaults.withCredentials = true

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/staff'>
    <StaffContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StaffContextProvider>
  </BrowserRouter>,
)
