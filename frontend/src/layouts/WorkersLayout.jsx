import { Outlet } from 'react-router-dom'
import SideBar from '../components/workers/SideBar'

const WorkersLayout = () => {

  return (

    <>

      <div className='flex w-full'>

        <SideBar />

        <Outlet />

      </div>

    </>

  )
}

export default WorkersLayout