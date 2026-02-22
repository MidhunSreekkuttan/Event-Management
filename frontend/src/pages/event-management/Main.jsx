import React from 'react'
import SideBar from '../../components/event-management/SideBar'
import Navbar from '../../components/event-management/Navbar'

const Main = () => {
    return (
        <div className='min-h-screen'>

            <>
                <Navbar />
                <hr />

                <div className='flex w-full'>
                    <SideBar />
                </div>

            </>

        </div>
    )
}

export default Main