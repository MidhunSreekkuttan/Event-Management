import React from 'react'
import { icon, logo } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium bg-amber-300 h-22 rounded-3xl shadow-2xl my-1 mx-1 sticky top-0'>

      <NavLink to='/'>
        <img src={logo.adhithiShack} className='w-50 ml-10' alt="" />
      </NavLink>

      <ul className='flex gap-5 mr-50'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/3 border-none h-[2.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6 mr-10'>
        <div className='group relative'>
        <img className='w-9  cursor-pointer' src={icon.userIcon} alt="" />
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
          <div className='flex flex-col gap-2 w-30 py-3 px-5 bg-amber-200 rounded text-amber-700'>
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