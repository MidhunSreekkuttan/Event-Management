import SideBar from '../../components/event-management/SideBar'
import Navbar from '../../components/event-management/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Main = () => {

    const { pathname } = useLocation()

    const navigate = useNavigate()

    const loginPage = pathname.endsWith('/event-management/login')

    const [state, setState] = useState(true)

    return (
        <div className='min-h-screen'>

            {!loginPage && state === false ? navigate('/event-management/add') :

                <>

                    <Navbar />
                    <hr />

                    <div className='flex w-full'>
                        <SideBar />
                    </div>

                </>

            }

        </div>
    )
}

export default Main