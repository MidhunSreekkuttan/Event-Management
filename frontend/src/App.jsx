import { Route, Routes } from "react-router-dom"
import LenisScroll from "./components/users/background/Lenis"
import ScrollToTop from "./components/users/background/ScrollToTop"
import SoftBackdrop from "./components/users/background/SoftBackdrop"
import UserRoutes from "./routes/UserRoutes"
import WorkerRoutes from "./routes/WorkerRoutes"
import EventManagementRoutes from "./routes/EventManagementRoutes"
import NotFound from "./pages/users/NotFound"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>

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

    </>
  )
}

export default App