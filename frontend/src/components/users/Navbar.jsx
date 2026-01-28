import React from 'react'
import { icon, logo } from '../../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className='max-w-6xl mx-auto flex items-center justify-between h-18 bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>

        <Link to='/'>
          <img src={logo.adhithiShack} className='w-50' alt="" />
        </Link>

        <ul className='flex gap-5 mr-8'>
          <NavLink to='/' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Home</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/eventList' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Event list</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>About</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/contactUs' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Contact Us</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-6 '>
          <button onClick={() => navigate('/login')}
            className='group relative cursor-pointer
             bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 transition-all px-7 py-1 rounded-2xl'>

            <img className='w-7 cursor-pointer' src={icon.userIcon} alt="" />

            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
              <div className='flex flex-col gap-2 w-30 py-3 px-5 bg-violet-300 rounded text-amber-700'>
                <p className='cursor-pointer hover:text-black'>Logout</p>
                <p className='cursor-pointer hover:text-black'></p>
                <p className='cursor-pointer hover:text-black'></p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar