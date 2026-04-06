import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { BackendContex } from "./ConnectBackendContex";

export const workersContext = createContext()

const WorkersContextProvider = (props) => {

    const { backendUrl } = useContext(BackendContex)

    const [authLoading, setAuthLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const getUserData = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/workers/getUserData",
                { withCredentials: true }
            )
            if (data.success) {
                setUserData(data.user)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        finally {
            setAuthLoading(false)
        }

    }, [backendUrl])

    const getAuth = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/workers/getAuth",
                { withCredentials: true }
            )
            if (data.success) {
                setIsLoggedIn(true)
                await getUserData()
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        finally {
            setAuthLoading(false)
        }

    }, [backendUrl, getUserData])

    useEffect(() => {
        getAuth()
    }, [getAuth])

    const value = useMemo(() => ({

        authLoading, setAuthLoading,
        userData, setUserData,
        getUserData,
        isLoggedIn, setIsLoggedIn

    }), [authLoading, setAuthLoading, userData, setUserData, getUserData, isLoggedIn, setIsLoggedIn])

    return (

        <workersContext.Provider value={value}>
            {props.children}
        </workersContext.Provider>

    )

}

export default WorkersContextProvider