import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import HomePage from './pages/workers/HomePage'
import Login from './pages/users/Login'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <div>
        <Routes>
          <Route path='/workers/home' element={<HomePage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App