import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Loader from '../components/Loading'
import BookingORenqury from '../pages/users/article/others/BookingORenqury'
import EnjoyTheEvent from '../pages/users/article/others/EnjoyTheEvent'

const Home = lazy(() => import('../pages/users/Home'))
const EventList = lazy(() => import('../pages/users/EventList'))
const About = lazy(() => import('../pages/users/About'))
const ContactUs = lazy(() => import('../pages/users/ContactUs'))
const Product = lazy(() => import('../pages/users/Product'))
const Login = lazy(() => import('../pages/users/login/Login'))
const Otp = lazy(() => import('../pages/users/login/Otp'))
const AddBookingPage = lazy(() => import('../pages/users/AddBookingPage'))
const BookingPage = lazy(() => import('../pages/users/BookingPage'))
const Response = lazy(() => import('../pages/users/Response'))
const ResponseDetails = lazy(() => import('../pages/users/ResponseDetails'))
const Receipt = lazy(() => import('../pages/users/Receipt'))

//articles
const Personal = lazy(() => import('../pages/users/article/category/Personal'))
const Cultural = lazy(() => import('../pages/users/article/category/Cultural'))
const Coorprates = lazy(() => import('../pages/users/article/category/Coorprates'))
const Entertainments = lazy(() => import('../pages/users/article/category/Entertainments'))
const Educational = lazy(() => import('../pages/users/article/category/Educational'))

const UserRoutes = () => {
  return (

    <>

      <Route element={
        <Suspense fallback={<Loader />}>
          <UserLayout />
        </Suspense>
      }>

        <Route path='/' element={<Home />} />
        <Route path='/eventList' element={<EventList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/adBooking/:bookingId" element={<AddBookingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/response" element={<Response />} />
        <Route path="/response-Details/:enquiryId" element={<ResponseDetails />} />
        <Route path='/receipt/:productId' element={<Receipt />} />

        {/* Articles */}
        <Route path='/personal' element={<Personal />} />
        <Route path='/cultural' element={<Cultural />} />
        <Route path='/coorprates' element={<Coorprates />} />
        <Route path='/entertainments' element={<Entertainments />} />
        <Route path='/educational' element={<Educational />} />

        <Route path='/bookigOrEnquery' element={<BookingORenqury />} />
        <Route path='/enjoyTheEvent' element={<EnjoyTheEvent />} />

      </Route>

    </>

  )
}

export default UserRoutes