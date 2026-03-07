import { NavLink } from 'react-router-dom'
import { staff_icons } from '../assets/assets'

const SideBar = () => {
    return (
        <div className='flex flex-col w-[18%] h-screen bg-blue-400 rounded-l-2xl ml-1 mt-1 mb-3'>

            {/*Welcome staff*/}

            <div className='mb-5 text-center w-full p-3'>
                <div className='mt-3'>
                    <h1 className='text-4xl font-bold'>
                        Welcome Staff
                    </h1>
                </div>
            </div>

            {/*.............*/}

            <div className='flex flex-col gap-3 w-full h-full p-3'>
                <NavLink to='/staff/dashBoard' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.dashboard_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            DashBoard
                        </h1>
                    </div>
                </NavLink>
                <NavLink to='/staff/enquiries' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.enquiry_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            Enquiries
                        </h1>
                    </div>
                </NavLink>
                <NavLink to='/staff/events' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.event_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            Events
                        </h1>
                    </div>
                </NavLink>
                <NavLink to='/staff/clients' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.clients_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            Clients
                        </h1>
                    </div>
                </NavLink>
                <NavLink to='/staff/report' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.reports_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            Report
                        </h1>
                    </div>
                </NavLink>
                <NavLink to='/staff/settings' className='py-3 rounded-lg items-center text-center'>
                    <div className='flex gap-3 items-center ml-5'>
                        <img className='w-10' src={staff_icons.settings_icon} alt="" />
                        <h1 className='text-2xl font-semibold'>
                            Settings
                        </h1>
                    </div>
                </NavLink>
                <button className='py-3 rounded-lg items-center text-center'>
                    <h1 className='text-2xl font-semibold'>
                        Logout
                    </h1>
                </button>
            </div>

        </div>
    )
}

export default SideBar