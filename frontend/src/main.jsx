import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './context/EventContext.jsx'
import './index.css'
import App from './App.jsx'
import { domAnimation, LazyMotion } from 'framer-motion'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EventContextProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </EventContextProvider>
  </BrowserRouter>,
)
