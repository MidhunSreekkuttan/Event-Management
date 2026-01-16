import React from 'react'
import { icon, logo } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium bg-violet-950 h-20 rounded-3xl shadow-2xl my-5 mx-1 fixed left-0 right-0 top-0 z-50'>

      <Link to='/'>
        <img src={logo.adhithiShack} className='w-50 ml-10' alt="" />
      </Link>

      <ul className='flex gap-5 mr-50'>
        <NavLink to='/' className='flex flex-col items-center gap-1 text-amber-200'>
          <p>Home</p>
          <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
        </NavLink>
        <NavLink to='/eventList' className='flex flex-col items-center gap-1 text-amber-200'>
          <p>Event list</p>
          <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 text-amber-200'>
          <p>About</p>
          <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
        </NavLink>
        <NavLink to='/contactUs' className='flex flex-col items-center gap-1 text-amber-200'>
          <p>Contact Us</p>
          <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6 mr-10'>
        <div className='group relative cursor-pointer bg-violet-500 px-6 py-1 rounded-4xl'>
          <Link to='/login'>
            <img className='w-9  cursor-pointer' src={icon.userIcon} alt="" />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 w-30 py-3 px-5 bg-violet-300 rounded text-amber-700'>
              <p className='cursor-pointer hover:text-black'>Logout</p>
              <p className='cursor-pointer hover:text-black'></p>
              <p className='cursor-pointer hover:text-black'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar