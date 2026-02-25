import { Navigate, Outlet } from "react-router-dom";

const EventManagementProtected = () => {
    const token = localStorage.getItem("EventManagementLogin");

    return token
        ? <Outlet />
        : <Navigate to="/event-management/login" replace />;
};

export default EventManagementProtected;