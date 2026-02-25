import React from 'react'
import SideBar from '../../components/event-management/SideBar'
import { icon } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <div className='flex gap-5'>
        <SideBar />

        <div className='mt-5 text-center'>
          <div className='bg-white/10 h-93 p-5 w-[97%] rounded-2xl'>
            <h1 className='text-3xl'>Quick Actions</h1>
            <div className='flex relative mt-5 gap-5'>
              <div className='flex flex-col text-center items-center justify-center gap-5 w-94 h-65 mb-90
                     rounded-2xl bg-linear-to-r from-purple-500 to-purple-600'>
                <NavLink className=' bg-white/40 rounded-4xl w-30 p-5' to='/event-management/add'>
                  <img src={icon.plusIcon} alt="icon" />
                </NavLink>
                <h1 className='text-2xl mb-4'>Create New Event</h1>
              </div>
              <div className='flex flex-col text-center items-center justify-center gap-5 w-94 h-65
                     mb-90 bg-yellow-400 rounded-2xl'>
                <NavLink className=' bg-white/50 rounded-4xl w-30 p-5' to=''>
                  <img src={icon.plusIcon} alt="icon" />
                </NavLink>
                <h1 className='text-2xl mb-4'>Create New Event</h1>
              </div>
              <div className='flex flex-col text-center items-center justify-center gap-5 w-94 h-65
                     mb-90 bg-cyan-500 rounded-2xl'>
                <NavLink className=' bg-white/60 rounded-4xl w-30 p-5' to=''>
                  <img src={icon.plusIcon} alt="icon" />
                </NavLink>
                <h1 className='text-2xl mb-4'>Create New Event</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home