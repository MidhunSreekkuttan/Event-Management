import { NavLink } from 'react-router-dom'
import { staff_icons } from '../assets/assets'
import { useContext } from 'react'
import { StaffContext } from '../context/staffContext'

const SideBar = () => {

    const { setIsloggedIn, setStaffData } = useContext(StaffContext)

    const handleClick = () => {
        setIsloggedIn(false)
        setStaffData(null)
    }

    return (
        <div className='flex flex-col w-[13%] bg-sky-500 text-white rounded-l-3xl ml-1 mt-1 mb-3 shadow-xl'>

            {/*Welcome staff*/}

            <div className='mb-6 text-center w-full p-6 border-b border-slate-700'>
                <div className='mt-2'>
                    <h1 className='text-2xl font-bold tracking-wide'>
                        Staff Panel
                    </h1>
                    <p className='text-sm text-slate-900 mt-1'>
                        Dashboard
                    </p>
                </div>
            </div>

            {/*Navigation*/}

            <div className='flex flex-col gap-2 w-full h-full px-4 pb-4'>

                <NavLink
                    to='/'
                    className='py-3 rounded-xl transition duration-200'
                >
                    <div className='flex gap-3 items-center ml-3'>
                        <img className='w-7 opacity-90' src={staff_icons.dashboard_icon} alt="" />
                        <h1 className='text-lg font-medium'>
                            Dashboard
                        </h1>
                    </div>
                </NavLink>

                <NavLink
                    to='/events'
                    className='py-3 rounded-xl transition duration-200'
                >
                    <div className='flex gap-3 items-center ml-3'>
                        <img className='w-7 opacity-90' src={staff_icons.event_icon} alt="" />
                        <h1 className='text-lg font-medium'>
                            Events
                        </h1>
                    </div>
                </NavLink>

                <NavLink
                    to='/clients'
                    className='py-3 rounded-xl transition duration-200'
                >
                    <div className='flex gap-3 items-center ml-3'>
                        <img className='w-7 opacity-90' src={staff_icons.clients_icon} alt="" />
                        <h1 className='text-lg font-medium'>
                            Clients
                        </h1>
                    </div>
                </NavLink>

                <NavLink
                    to='/report'
                    className='py-3 rounded-xl transition duration-200'
                >
                    <div className='flex gap-3 items-center ml-3'>
                        <img className='w-7 opacity-90' src={staff_icons.reports_icon} alt="" />
                        <h1 className='text-lg font-medium'>
                            Report
                        </h1>
                    </div>
                </NavLink>

                <NavLink
                    to='/settings'
                    className='py-3 rounded-xl transition duration-200'
                >
                    <div className='flex gap-3 items-center ml-3'>
                        <img className='w-7 opacity-90' src={staff_icons.settings_icon} alt="" />
                        <h1 className='text-lg font-medium'>
                            Settings
                        </h1>
                    </div>
                </NavLink>

                {/*Logout Button*/}

                <div className='pt-4 border-t border-slate-700'>
                    <button onClick={handleClick} className='w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 transition duration-200'>
                        <h1 className='text-lg font-semibold'>
                            Logout
                        </h1>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default SideBar