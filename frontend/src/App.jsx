import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/users/Home'
import Navbar from './components/users/Navbar'
import HomePage from './pages/workers/HomePage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
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