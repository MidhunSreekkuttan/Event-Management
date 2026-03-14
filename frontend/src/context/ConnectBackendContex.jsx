import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const BackendContex = createContext()

axios.defaults.withCredentials = true

const BackendContexProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState('')
    const [loading, setloading] = useState(false)

    //get user data + verification check
    const getUserData = useCallback(async () => {

        try {

            const { data } = await axios.get(`${backendUrl}/api/userData/getUserData`)

            if (data.success) {
                setUserData(data.userData)

                if (!data.userData.isAccountVerified) {
                    toast.error('You are not verified')
                    navigate('/otp', { replace: true })
                }

            } else {
                toast.error(data.message)
            }

        } catch (error) {

            toast.error(error.message)

        }

    }, [backendUrl, navigate])

    // check login status
    const getAuthState = useCallback(async () => {

        try {

            setloading(true)

            const { data } = await axios.get(`${backendUrl}/api/user/isAuth`)

            if (data.success) {
                setIsLoggedIn(true)
                await getUserData()
            }

        } catch (error) {

            toast.error(error.message)

        }
        finally {
            setloading(false)
        }

    }, [backendUrl, getUserData])

    useEffect(() => {
        getAuthState()
    }, [getAuthState])

    const value = useMemo(() => ({
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData,
        loading
    }), [backendUrl, isLoggedIn, userData, getUserData, loading])

    return (
        <BackendContex.Provider value={value}>
            {props.children}
        </BackendContex.Provider>
    )
}

export default BackendContexProvider