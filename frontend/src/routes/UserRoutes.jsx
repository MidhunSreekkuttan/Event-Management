import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Loader from '../components/Loading'
import ResetPassword from '../pages/users/login/ResetPassword'

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
const Corporate = lazy(() => import('../pages/users/article/category/Corporate'))
const Entertainments = lazy(() => import('../pages/users/article/category/Entertainments'))
const Educational = lazy(() => import('../pages/users/article/category/Educational'))
const BookingORenqury = lazy(() => import('../pages/users/article/others/BookingORenqury'))
const EnjoyTheEvent = lazy(() => import('../pages/users/article/others/EnjoyTheEvent'))

const PolicyandPrivacy = lazy(() => import('../pages/users/article/others/PolicyandPrivacy'))
const TermsandConditions = lazy(() => import('../pages/users/article/others/TermsandConditions'))

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

        <Route path='/resetPassword' element={<ResetPassword />} />

        {/* Articles */}
        <Route path='/personal' element={<Personal />} />
        <Route path='/cultural' element={<Cultural />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/entertainments' element={<Entertainments />} />
        <Route path='/educational' element={<Educational />} />

        <Route path='/policyAndPrivacy' element={<PolicyandPrivacy />} />
        <Route path='/TermsandConditions' element={<TermsandConditions />} />
        <Route path='/BookingORenqury' element={<BookingORenqury />} />
        <Route path='/EnjoyTheEvent' element={<EnjoyTheEvent />} />

      </Route>

    </>

  )
}

export default UserRoutes