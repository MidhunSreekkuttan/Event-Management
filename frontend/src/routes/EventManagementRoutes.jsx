import { Route } from 'react-router-dom'
import EventManagementLayout from '../layouts/EventManagementLayout'
import Login from '../pages/event-management/login/Login'
import Otp from '../pages/event-management/login/Otp'
import EventManagementProtectedRoute from './EventManagementProtectedRoute'
import Home from '../pages/event-management/Home'
import Add from '../pages/event-management/Add'
import Booking from '../pages/event-management/Booking'
import Clients from '../pages/event-management/Clients'
import Events from '../pages/event-management/Events'
import Reports from '../pages/event-management/Reports'

const EventManagementRoutes = () => {
  return (
    <Route path='/event-management' element={<EventManagementLayout />}>

      <Route path='login' element={<Login />} />
      <Route path='otp' element={<Otp />} />

      <Route element={<EventManagementProtectedRoute />}>

        <Route path='home' element={<Home />} />
        <Route path='add' element={<Add />} />
        <Route path='booking' element={<Booking />} />
        <Route path='clients' element={<Clients />} />
        <Route path='events' element={<Events />} />
        <Route path='reports' element={<Reports />} />

      </Route>

    </Route>
  )
}

export default EventManagementRoutes