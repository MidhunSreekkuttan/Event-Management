import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { BackendContex } from '../../context/ConnectBackendContex';
import { toast } from 'react-toastify';
import axios from 'axios';
import { workersContext } from '../../context/WorkersContext';

const SideBar = () => {

    const { backendUrl } = useContext(BackendContex)
    const { setIsLoggedIn } = useContext(workersContext)

    const logout = async () => {

        try {

            const { data } = await axios.post(backendUrl + "/api/workers/logout")
            if (data.success) {
                setIsLoggedIn(false)
                toast.info(data.message)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

    const menuItems = [
        { name: 'Dashboard', path: "/workers/home" },
        { name: 'My Profile', path: "/workers/dashboard" },

    ];

    return (

        <aside className="hidden w-[280px] shrink-0 bg-[radial-gradient(circle_at_top,#1f4fff,transparent_25%),linear-gradient(180deg,#0b1530,#0a1228_45%,#0c1834)] p-4 text-white lg:flex lg:flex-col">
            <div className="mb-6 rounded-[28px] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 shadow-lg
                             shadow-blue-900/40">
                        <span className="text-lg">🏠</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-tight">Event Management</h1>
                        <p className="text-sm text-slate-300">Worker Dashboard</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="space-y-2">
                    {menuItems.map((item) => {
                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left 
                                            text-[15px] font-medium transition ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/40'
                                        : 'text-slate-200 hover:bg-white/10'
                                    }`}
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-lg">{getMenuIcon(item.name)}</span>
                                    {item.name}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>

            <button onClick={logout}
                className="mt-4 flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/5 px-5 py-4
                     text-left text-slate-200 backdrop-blur hover:bg-white/10">
                <span className="text-lg">↩</span>
                Logout
            </button>
        </aside>

    )
}

function getMenuIcon(item) {
    switch (item) {
        case 'Dashboard':
            return '⌂';
        case 'My Profile':
            return '◯';
        case 'My Bookings':
            return '▦';
        case 'My Availability':
            return '☑';
        case 'My Events':
            return '🗓';
        case 'Earnings':
            return '$';
        case 'Notifications':
            return '🔔';
        case 'Settings':
            return '⚙';
        default:
            return '•';
    }
}

export default React.memo(SideBar)