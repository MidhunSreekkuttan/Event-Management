import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { icon } from '../../assets/assets'

const SideBar = () => {

    const linkBase = "flex items-center gap-3 border-r-0 px-3 py-2 rounded-2xl";

    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 text-2xl'>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/home'>
                    <img className='w-7 ml-15' src={icon.visit_us} alt="" />
                    <p>Dashboard</p>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/events'>
                    <img className='w-7 ml-15' src={icon.create_event_icon} alt="" />
                    <p>Events</p>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/vendors'>
                    <p>Vendors</p>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/clients'>
                    <img className='w-7 bg-amber-50 ml-14' src={icon.userIcon} alt="" />
                    <p>Clients</p>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/booking'>
                    <img className='w-7 ml-14' src={icon.contact_us} alt="" />
                    <p>Bookings</p>
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${linkBase} ${isActive ? 'color' : ''}`} to='/event-management/reports'>
                    <img className='w-7 ml-14' src={icon.settings_icon} alt="" />
                    <p>Reports</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar