import { EventManagementContext } from '../context/EventManagementContext'
import { useContext } from 'react'
import Loader from '../components/Loading'
import { Navigate, Outlet, Route } from 'react-router-dom'
import EventManagementLayout from '../layouts/EventManagementLayout'
import Login from '../pages/event-management/login/Login'
import Otp from '../pages/event-management/login/Otp'
import Home from '../pages/event-management/Home'
import Add from '../pages/event-management/Add'
import Booking from '../pages/event-management/Booking'
import Clients from '../pages/event-management/Clients'
import Events from '../pages/event-management/Events'
import Reports from '../pages/event-management/Reports'

const EventManagementRoutes = () => {

  const { isLoggedIn, authLoading } = useContext(EventManagementContext)

  //adding protected route
  const protectedRoute = () => {

    if (authLoading) {
      return <Loader />
    } else {
      return isLoggedIn ? <Outlet /> : <Navigate to='/event-management/login' />
    }

  }

  return (
    <Route path='/event-management' element={<EventManagementLayout />}>

      <Route path='login' element={<Login />} />
      <Route path='otp' element={<Otp />} />

      <Route element={protectedRoute()}>

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