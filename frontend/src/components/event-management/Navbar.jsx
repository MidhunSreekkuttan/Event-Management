import React from 'react'
import { logo } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
        <img className='w-[max(15%,80px)]' src={logo.adhithi} alt="" />
        <button className='bg-amber-600 px-5 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar