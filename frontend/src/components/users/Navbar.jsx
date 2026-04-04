import { useContext } from 'react'
import { logo } from '../../assets/assets'
import { User } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BackendContex } from '../../context/ConnectBackendContex'
import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.withCredentials = true

const Navbar = () => {

  const { backendUrl, userData, setUserData, setIsLoggedIn } = useContext(BackendContex)

  axios.defaults.withCredentials = true

  const logOut = async () => {

    try {

      const { data } = await axios.post(backendUrl + '/api/user/logout')
      data.success && setIsLoggedIn(false)
      data.success && setUserData(false)

    } catch (error) {
      toast.error(error.message)
    }
  }

  const navigate = useNavigate()

  return (
    <motion.nav className='fixed top-5 left-0 right-0 z-50 px-4'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className='max-w-6xl mx-auto flex items-center justify-between h-18 bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>

        <Link to='/#home'>
          <img src={logo.adhithiShack} className='w-50' alt="" />
        </Link>

        <ul className='flex gap-5 mr-8'>
          <NavLink to='/' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Home</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/eventList' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Event list</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>About</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
          <NavLink to='/contactUs' className='flex flex-col items-center gap-1 text-amber-200 hover:text-white transition'>
            <p>Contact Us</p>
            <hr className='w-2/3 border-none h-[2.5px] bg-amber-100 hidden' />
          </NavLink>
        </ul>

        {userData?.isAccountVerified ? (
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-amber-50 relative group text-black cursor-pointer'>

            {userData?.name?.[0]?.toUpperCase() || "U"}

            <div className='absolute hidden group-hover:block top-0 right-0 z-10 pt-10 w-40'>
              <ul className='list-none m-0 p-2 text-xl font-semibold bg-linear-to-r from-purple-500 to-purple-600 grid gap-2'>

                <li onClick={() => navigate('/booking')}
                  className='px-2 hover:bg-linear-to-br from-indigo-500 to-indigo-600 hover:text-amber-50'>
                  MY Booking
                </li>

                <li onClick={() => navigate('/response')}
                  className='px-2 hover:bg-linear-to-br from-indigo-500 to-indigo-600 hover:text-amber-50'>
                  MY Response
                </li>

                <li onClick={logOut} className='px-2 hover:bg-linear-to-br from-indigo-500 to-indigo-600 hover:text-amber-50'>
                  Logout
                </li>

              </ul>
            </div>

          </div>
        ) : (

          <div className='relative flex group items-center gap-6 '>
            <button onClick={() => navigate('/login')}
              className='cursor-pointer
             bg-linear-to-br from-indigo-500 to-indigo-600 transition-all px-7 py-1 rounded-2xl hover:opacity-80'>

              <User size={30} className='text-black' />

            </button>
          </div>

        )}

      </div>
    </motion.nav>
  )
}

export default Navbar