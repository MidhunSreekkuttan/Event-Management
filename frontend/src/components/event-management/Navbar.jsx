import { useContext } from 'react'
import logo from '/event-management-4-8-2026.gif'
import { EventManagementContext } from '../../context/EventManagementContext'

const Navbar = () => {

  const { setIsLoggedIn, logout } = useContext(EventManagementContext)

  const handleOnClick = () => {
    logout()
    setIsLoggedIn(false)
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between border-b-2'>
      <img className='w-100' src={logo} alt="" />
      <button onClick={handleOnClick} className='bg-amber-600 px-5 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar