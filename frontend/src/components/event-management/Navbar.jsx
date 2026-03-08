import { useContext } from 'react'
import { logo } from '../../assets/assets'
import { EventManagementContext } from '../../context/EventManagementContext'

const Navbar = () => {

  const { setIsLoggedIn, logout } = useContext(EventManagementContext)

  const handleOnClick = () => {
    logout()
    setIsLoggedIn(false)
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between border-b-2'>
      <img className='w-[max(15%,80px)]' src={logo.adhithi} alt="" />
      <button onClick={handleOnClick} className='bg-amber-600 px-5 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar