import { BarChart3, CalendarDays, LayoutDashboard, Mail, Settings, ShieldUserIcon, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const navItems = [
        { label: "Dashboard", icon: LayoutDashboard, active: true },
        { label: "Events", icon: CalendarDays },
        { label: "Enquiries", icon: Mail },
        { label: "Users", icon: Users },
        { label: "Analytics", icon: BarChart3 },
        { label: "Settings", icon: Settings },
    ];

    const redGlass =
        "border border-red-200/60 bg-gradient-to-br from-white/80 via-red-50/70 to-red-100/60 backdrop-blur-2xl shadow-[0_25px_100px_rgba(220,38,38,0.18)]";

    return (
        <aside className="border-r border-red-200/50 p-4 lg:p-6 w-[280px]">
            <div className={`rounded-[28px] p-4 ${redGlass}`}>
                <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-600 to-black text-white shadow-lg shadow-red-500/20">
                        <CalendarDays className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">EventFlow Admin</h1>
                    </div>
                </div>

                <nav className="space-y-2">

                    <NavLink to='/' className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left
                        transition shadow-lg shadow-red-500/20`}>

                        <LayoutDashboard className="h-5 w-5" />
                        <span className="text-sm font-medium">Dashboard</span>

                    </NavLink>
                    <NavLink to='/events' className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left
                         transition shadow-lg shadow-red-500/20`}>

                        <CalendarDays className="h-5 w-5" />
                        <span className="text-sm font-medium">Events</span>

                    </NavLink>
                    <NavLink to='/usersList' className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left
                         transition shadow-lg shadow-red-500/20`}>

                        <Users className="h-5 w-5" />
                        <span className="text-sm font-medium">Users List</span>

                    </NavLink>
                    <NavLink to='/eventManagers' className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left
                         transition shadow-lg shadow-red-500/20`}>

                        <ShieldUserIcon className="h-5 w-5" />
                        <span className="text-sm font-medium">Event Managers</span>

                    </NavLink>
                    <NavLink to='/staffsList' className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left
                         transition shadow-lg shadow-red-500/20`}>

                        <CalendarDays className="h-5 w-5" />
                        <span className="text-sm font-medium">Staffs List</span>

                    </NavLink>

                </nav>
            </div>
        </aside>
    )
}

export default SideBar