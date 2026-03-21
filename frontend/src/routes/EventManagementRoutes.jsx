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
import Events from '../pages/event-management/Events'
import Reports from '../pages/event-management/Reports'
import StayingPage from '../pages/event-management/StayingPage'
import Registeration from '../pages/event-management/Registeration'
import Waiting from '../pages/event-management/Waiting'

const EventManagementRoutes = () => {

  const { userData, authLoading } = useContext(EventManagementContext)

  //adding protected route
  const protectedRoute = () => {

    if (authLoading) {

      return <Loader />

    } else {

      return userData?.isAdminVerified === 'pending'.toLowerCase() ? <Navigate to='/event-management/staying' /> : <Outlet />

    }

  }

  return (

    <>

      <Route path='/event-management/login' element={<Login />} />
      <Route path='/event-management/otp' element={<Otp />} />

      <Route path='/event-management' element={<EventManagementLayout />}>

        <Route path='staying' element={<StayingPage />} />
        <Route path='registeration' element={<Registeration />} />
        <Route path='waiting' element={<Waiting />} />

        <Route element={protectedRoute()}>

          <Route path='home' element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='booking' element={<Booking />} />
          <Route path='events' element={<Events />} />
          <Route path='reports' element={<Reports />} />

        </Route>

      </Route>

    </>

  )
}

export default EventManagementRoutes