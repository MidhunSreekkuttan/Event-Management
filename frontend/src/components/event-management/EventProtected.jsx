import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const EventManagementProtected = () => {
    
    const [token, setToken] = useState('g')
    return token === '' ? <Navigate to="/event-management/login" /> : <Outlet />
}

export default EventManagementProtected