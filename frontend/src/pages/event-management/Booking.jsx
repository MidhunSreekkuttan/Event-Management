import { useContext, useEffect } from 'react'
import SideBar from '../../components/event-management/SideBar'
import { EventContext } from '../../context/EventContext'
import { icon } from '../../assets/assets'
import ClientData from '../../components/event-management/ClientData'

const Booking = () => {

  const { clientData, getClientData } = useContext(EventContext)

  useEffect(() => {
    getClientData()
  }, [])

  return (
    <div className='flex gap-10'>
      <SideBar />

      <div className='flex flex-col bg-white/10 w-6xl mt-5 rounded-2xl p-7'>
        {/*Topper*/}

        <div className='flex flex-col gap-5'>
          <h1 className='text-5xl font-bold'>
            Bookings
          </h1>
          <p className='text-white/55'>
            Manage and monitor all registered users
          </p>
        </div>
        {/*Badjes*/}

        <div className='grid grid-cols-3 gap-3 mt-5'>
          <div className='flex flex-col gap-3 p-5 items-center w-full bg-purple-500 rounded-2xl'>
            <div className='flex'>
              <div className='bg-white/60 relative right-15 py-1 px-2 rounded-full'>
                <img className='w-10' src={icon.clients_icon} alt="" />
              </div>
              <h1 className='text-3xl font-semibold'>{clientData.length}</h1>
            </div>
            <h1 className='text-lg font-bold'>TOTAL BOOKINGS</h1>
          </div>
          <div className='flex flex-col gap-3 p-5 items-center w-full bg-yellow-600 rounded-2xl'>
            <div className='flex'>
              <div className='bg-yellow-300 relative right-15 py-1 px-2 rounded-full'>
                <img className='w-10' src={icon.events_icon} alt="" />
              </div>
              <h1 className='text-3xl font-semibold'>320</h1>
            </div>
            <h1 className='text-lg font-bold'>APROVED EVENTS</h1>
          </div>
          <div className='flex flex-col gap-3 p-5 items-center w-full bg-red-700/85 rounded-2xl'>
            <div className='flex'>
              <div className='bg-yellow-300 relative right-15 py-1 px-2 rounded-full'>
                <img className='w-10' src={icon.delete_icon} alt="" />
              </div>
              <h1 className='text-3xl font-semibold'>320</h1>
            </div>
            <h1 className='text-lg font-bold'>REGECTED EVENTS</h1>
          </div>
        </div>
        {/*middle*/}

        <div className='bg-white/10 w-full mt-10 rounded-2xl'>
          <div className='p-2'>
            {/*heading*/}

            <ul className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] ml-20 mt-3'>
              <b className=''>Image</b>
              <b className=''>name</b>
              <b className='text-center'>Event Name</b>
              <b className='text-center'>Place</b>
              <b className='text-center'>Action</b>
            </ul>

            <div className='mt-3 w-full h-full p-5'>
              <div className='flex flex-col gap-3'>
                {Array.isArray(clientData) &&
                  clientData.map((data, index) =>
                    data.items.map((item, Itemindex) => (
                      <ClientData key={`${index}-${Itemindex}`} id={item._id} image={item.productId.image} name={item.name}
                        event_name={item.productId.event_name} place={item.place} />
                    ))
                  )
                }
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Booking