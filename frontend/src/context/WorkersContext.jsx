import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { BackendContex } from "./ConnectBackendContex";

export const workersContext = createContext()

const WorkersContextProvider = (props) => {

    const { backendUrl } = useContext(BackendContex)

    const [authLoading, setAuthLoading] = useState(false)
    const [userData, setUserData] = useState([])

    console.log(userData);

    const getUserData = useCallback(async () => {

        try {
            setAuthLoading(true)

            const { data } = await axios.get(backendUrl + "/api/workers/getUserData")
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

    }, [])

    const getAuth = useCallback(async () => {

        try {

            const { data } = await axios.get(backendUrl + "/api/workers/getAuth")
            if (data.success) {
                await getUserData()
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [])

    useEffect(() => {
        getAuth()
    }, [])

    const value = useMemo(() => ({

        authLoading, setAuthLoading,
        userData, setUserData,
        getUserData

    }), [authLoading, setAuthLoading, userData, setUserData, getUserData])

    return (

        <workersContext.Provider value={value}>
            {props.children}
        </workersContext.Provider>

    )

}

export default WorkersContextProvider