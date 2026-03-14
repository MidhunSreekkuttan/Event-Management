import { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'
import axios from 'axios'
import ProductList from '../../components/event-management/ProductList'
import { NavLink } from 'react-router-dom'

const Events = () => {

  const { backendUrl } = useContext(BackendContex)

  const [itemList, setItemList] = useState([])

  const removeItem = async (id) => {

    try {

      const response = await axios.post(backendUrl + '/api/product/removeProduct', { id })

      if (response.data.message) {
        toast.success(response.data.message)
        await fetchData()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const fetchData = async () => {

    try {

      const response = await axios.get(backendUrl + '/api/product/ownerListProduct')
      if (response.data.success) {
        setItemList(response.data.product)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <>

      <div className='flex'>
        <SideBar />

        <div className='bg-white/8 w-[78rem]'>
          <div className='flex flex-col gap-3'>
            <h1 className='pl-6 mt-5 text-4xl font-semibold'>Events</h1>
            <span className='pl-6 text-gray-400'>Manage and organize all your upcoming and past events.</span>
          </div>

          {/*topper*/}

          <div className='flex gap-5 justify-center'>
            <div className='bg-purple-600 w-70 h-28 rounded-3xl mt-5 flex flex-col justify-center items-center
                 hover:scale-105'>
              <p className='relative right-20 text-4xl'>{itemList.length}</p>
              <p className='relative right-11 top-3 text-purple-300'>Total Events</p>
            </div>
            <div className='bg-blue-600 w-70 h-28 rounded-3xl mt-5 flex flex-col justify-center items-center
                 hover:scale-105'>
              <p className='relative right-13 text-4xl'></p>
              <p className='relative right-13 top-3'>Upcoming</p>
            </div>
            <div className='bg-green-600 w-70 h-28 rounded-3xl mt-5 flex flex-col justify-center items-center
                  hover:scale-105'>
              <p className='relative right-13 text-4xl'></p>
              <p className='relative right-13 top-3'>Ongoing</p>
            </div>
            <div className='bg-gray-500 w-70 h-28 rounded-3xl mt-5 flex flex-col justify-center items-center
                  hover:scale-105'>
              <p className='relative right-13 text-4xl'></p>
              <p className='relative right-13 top-3'>Completed</p>
            </div>
          </div>

          {/*Event List*/}

          <div className='bg-white/10 mt-5 mx-5 rounded-2xl'>
            <div className='flex justify-between'>
              <h1 className='text-2xl font-bold pl-6 p-5'>ALL Events</h1>
              <NavLink className='flex gap-4 w-fit h-fit px-6 py-2 rounded-lg bg-purple-600 text-center
                  mt-5 ml-207'
                to='/event-management/add'>
                <h1>+</h1>
                <h1 className=''>
                  Create Event
                </h1>
              </NavLink>
              <hr />
            </div>

            {/*fetch events from backend*/}

            <div className='grid grid-cols-3 gap-7 p-5'>
              {itemList.map((item) => (
                <ProductList key={item._id} image={item.image} event_name={item.event_name} category={item.category}
                  location={item.location} price={item.price} starting_price={item.starting_price} _id={item._id}
                  onDelete={removeItem} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Events