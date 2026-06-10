import { Route, Routes, useLocation } from "react-router-dom"
import LenisScroll from "./components/users/background/Lenis"
import ScrollToTop from "./components/users/background/ScrollToTop"
import SoftBackdrop from "./components/users/background/SoftBackdrop"
import UserRoutes from "./routes/UserRoutes"
import EventManagementRoutes from "./routes/EventManagementRoutes"
import NotFound from "./pages/users/NotFound"
import { ToastContainer } from "react-toastify"

const App = () => {

  const { pathname } = useLocation()

  const isColor = [

    "/personal",
    "/cultural",
    "/corporate",
    "/entertainments",
    "/educational",
    '/bookigOrEnquery',
    '/enjoyTheEvent',
    "/BookingORenqury"

  ].includes(pathname)

  return (
    <>

      <div className={isColor ? "bg-[#F6F0FD] text-black min-h-screen" : ""}>
        <ScrollToTop />
        <SoftBackdrop />
        <LenisScroll />
        <ToastContainer />

        <Routes>

          {UserRoutes()}
          {EventManagementRoutes()}

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

    </>
  )
}

export default App