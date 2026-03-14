import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { BackendContex } from "./ConnectBackendContex";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const EventManagementContext = createContext()

axios.defaults.withCredentials = true

const EventManagementContextProvider = (props) => {

    const navigate = useNavigate()

    const { backendUrl } = useContext(BackendContex)

    const [userData, setUserData] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [authLoading, setAuthLoading] = useState(true)

    const getUserData = useCallback(async () => {

        try {
            const { data } = await axios.get(backendUrl + '/api/eventManagement/getUserData')

            data.success ? setUserData(data.userData) : toast.error(data.message)

            if (!data.userData.isAccountVerified) {
                toast.error('You are not verified')
                navigate('/event-management/otp', { replace: true })
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }

    }, [backendUrl])

    const getAuthState = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/eventManagement/isAuth')

            if (data.success) {
                setIsLoggedIn(true)
                await getUserData()
            } else {
                setIsLoggedIn(false)
                setUserData(null)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        finally {
            setAuthLoading(false)
        }

    }, [backendUrl, getUserData])

    const logout = async () => {

        try {

            const res = await axios.post(backendUrl + '/api/eventManagement/logout')

            if (res.data.success) {
                setIsLoggedIn(false)
                setUserData(null)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthState()
    }, [getAuthState])

    const value = useMemo(() => ({

        userData, setUserData,
        isLoggedIn, setIsLoggedIn,
        getUserData,
        logout,
        authLoading, setAuthLoading

    }), [userData, isLoggedIn, getUserData, logout, authLoading])

    return (

        <EventManagementContext.Provider value={value}>
            {props.children}
        </EventManagementContext.Provider>

    )

}

export default EventManagementContextProvider