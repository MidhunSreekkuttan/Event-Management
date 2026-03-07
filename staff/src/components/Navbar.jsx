import React from 'react'
import { logo } from '../../../frontend/src/assets/assets'

const Navbar = () => {
    return (
        <div className='flex items-center py-2 px-[4%] justify-between border-b-2'>
            <img className='w-[max(15%,80px)]' src={logo.adhithi} alt="" />
        </div>
    )
}

export default Navbar