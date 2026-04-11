import { Route, Routes, useLocation } from "react-router-dom"
import LenisScroll from "./components/users/background/Lenis"
import ScrollToTop from "./components/users/background/ScrollToTop"
import SoftBackdrop from "./components/users/background/SoftBackdrop"
import UserRoutes from "./routes/UserRoutes"
import WorkerRoutes from "./routes/WorkerRoutes"
import EventManagementRoutes from "./routes/EventManagementRoutes"
import NotFound from "./pages/users/NotFound"
import { ToastContainer } from "react-toastify"

const App = () => {

  const { pathname } = useLocation()

  const isColor = [

    "/personal",
    "/cultural",
    "/coorprates",
    "/entertainments",
    "/educational",
    '/bookigOrEnquery',
    '/enjoyTheEvent'

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
          {WorkerRoutes()}
          {EventManagementRoutes()}

          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>

    </>
  )
}

export default App