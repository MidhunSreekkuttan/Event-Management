import { Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Home from '../pages/users/Home'
import EventList from '../pages/users/EventList'
import About from '../pages/users/About'
import ContactUs from '../pages/users/ContactUs'
import Product from '../pages/users/Product'
import Login from '../pages/users/login/Login'
import Otp from '../pages/users/login/Otp'
import AddBookingPage from '../pages/users/AddBookingPage'
import BookingPage from '../pages/users/BookingPage'
import Response from '../pages/users/Response'
import ResponseDetails from '../pages/users/ResponseDetails'

const UserRoutes = () => {
  return (
    <Route element={<UserLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/eventList' element={<EventList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/adBooking" element={<AddBookingPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/response" element={<Response />} />
      <Route path="/response-Details/:enquiryId" element={<ResponseDetails />} />
    </Route>
  )
}

export default UserRoutes