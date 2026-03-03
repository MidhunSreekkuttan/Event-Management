import { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { BackendContex } from '../../context/ConnectBackendContex'
import { toast } from 'react-toastify'
import axios from 'axios'

const Events = () => {

  const { backendUrl } = useContext(BackendContex)

  const [itemList, setItemList] = useState([])

  const removeItem = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/removeProduct', { id })
      if (response.data.success) {
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

        <p className='relative mt-5 left-25'>ALL Event List</p>
        <div className='relative flex flex-col gap-2 mt-20'>
          {/*  List Table Title  */}

          <div className='w-full'>
            <div className='grid grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-600 text-sm'>
              <b>Image</b>
              <b>Company_name</b>
              <b>Event_name</b>
              <b>Description</b>
              <b>Category</b>
              <b>location</b>
              <b>Price</b>
              <b>Starting Price</b>
              <b className='text-center'>Action</b>
            </div>
          </div>
          {/*  List Items */}

          <div className='w-full'>
            {itemList.map((item, index) => (
              <div className='grid grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
                key={index}>
                <img className='w-18 h-20 object-cover' src={item.image[0]} alt={item.name} />
                <p>{item.company_name}</p>
                <p>{item.event_name}</p>
                <p>{item.description.length > 15 ? item.description.slice(0, 15) + '...' : item.description}</p>
                <p>{item.category}</p>
                <p>{item.location}</p>
                <p>{item.price}</p>
                <p>{item.starting_price}</p>
                <p onClick={() => removeItem(item._id)} className='text-center text-lg cursor-pointer'>X</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </>
  )
}

export default Events