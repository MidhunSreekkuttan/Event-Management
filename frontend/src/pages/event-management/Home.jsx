import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { icon } from '../../assets/assets'
import BarChart from '../../components/event-management/BarChart'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'
import axios from 'axios'
import EventsByTypePie from '../../components/event-management/PieChart'

const Home = () => {

  const { backendUrl } = useContext(BackendContex)

  const [item, setItem] = useState([])

  const getData = async () => {

    try {

      const res = await axios.get(backendUrl + '/api/product/ownerListProduct')
      if (res.data.success) {
        setItem(res.data.product)
      } else {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex text-white'>

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className='flex-1 p-6'>

        <div className='bg-white/10 p-6 rounded-2xl'>

          {/* Heading */}
          <h1 className='text-3xl font-semibold mb-2'>Dashboard</h1>
          <p className='text-gray-400 mb-6'>
            Welcome back! Here's what's happening with your events today.
          </p>

          {/* Cards */}
          <div className='grid grid-cols-3 gap-6 mb-8'>

            {/* Revenue */}
            <div className='flex flex-col gap-4 h-fit p-5 pt-8 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600'>
              <div className='bg-white/50 rounded-full p-4 w-fit ml-7'>
                <img src={icon.plusIcon} alt="icon" className='w-6' />
              </div>
              <p className='ml-7 text-3xl font-mono'>
                Dummy
              </p>
              <h2 className='text-xl font-semibold ml-7'>Total Revenue</h2>
            </div>

            {/* Events */}
            <div className='flex flex-col gap-4 h-fit p-5 pt-8 rounded-2xl bg-yellow-400 text-black'>
              <div className='bg-white/50 rounded-full p-4 w-fit ml-7'>
                <img src={icon.plusIcon} alt="icon" className='w-6' />
              </div>
              <p className='ml-7 text-3xl font-mono'>
                {item.length}
              </p>
              <h2 className='text-xl font-semibold ml-7'>Total Events</h2>
            </div>

            {/* Clients */}
            <div className='flex flex-col gap-4 h-fit p-5 pt-8 rounded-2xl bg-cyan-500'>
              <div className='bg-white/50 rounded-full p-4 w-fit ml-7'>
                <img src={icon.plusIcon} alt="icon" className='w-6' />
              </div>
              <p className='ml-7 text-3xl font-mono'>
                Dummy
              </p>
              <h2 className='text-xl font-semibold ml-7'>Total Clients</h2>
            </div>

          </div>

          {/* Chart Section */}

          <div className='bg-black/30 p-6 rounded-xl'>
            <h2 className='text-xl mb-4'>Revenue Overview</h2>
            <div className='flex gap-3'>
              <BarChart />
              <EventsByTypePie />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home