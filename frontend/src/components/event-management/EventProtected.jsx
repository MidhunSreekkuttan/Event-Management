import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { EventManagementContext } from "../../context/EventManagementContext";

const EventManagementProtected = () => {
    const token = localStorage.getItem("EventManagementLogin");

    // const { isLoggedIn } = useContext(EventManagementContext)

    return token
        ? <Outlet />
        : <Navigate to="/event-management/login" replace />;
};

export default EventManagementProtected;