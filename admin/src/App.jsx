import { Routes } from 'react-router-dom'
import Router from './Router'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (

    <>

      <ToastContainer />

      <Routes>

        {Router()}

      </Routes>

    </>

  )
}

export default App