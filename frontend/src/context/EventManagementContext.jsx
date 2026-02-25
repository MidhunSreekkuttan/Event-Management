import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BackendContex } from "./ConnectBackendContex";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const EventManagementContext = createContext()

const EventManagementContextProvider = (props) => {

    const navigate = useNavigate()

    const { backendUrl } = useContext(BackendContex)

    const [userData, setUserData] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    axios.defaults.withCredentials = true

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/eventManagement/getUserData')

            data.success ? setUserData(data.userData) : toast.error(data.message)

            if (!data.userData.isAccountVerified) {
            //    toast.error('You are not verified')
                //navigate('/event-management/otp', { replace: true })
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    const getAuthState = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/eventManagement/isAuth')

            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    
    useEffect(() => {
        getAuthState()
    }, [])

    const value = {

        userData, setUserData,
        isLoggedIn, setIsLoggedIn,
        getUserData

    }

    return (

        <EventManagementContext.Provider value={value}>
            {props.children}
        </EventManagementContext.Provider>

    )

}

export default EventManagementContextProvider