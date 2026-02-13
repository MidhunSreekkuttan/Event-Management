import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const BackendContex = createContext()

const BackendContexProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

    axios.defaults.withCredentials = true

    // check login status
    const getAuthState = async () => {
        try {

            const { data } = await axios.get(`${backendUrl}/api/user/isAuth`)

            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            }

        } catch (error) {

            toast.error(error.message)

        }
    }

    //get user data + verification check
    const getUserData = async () => {

        try {

            const { data } = await axios.get(`${backendUrl}/api/userData/getUserData`)

            data.success ? setUserData(data.userData) : toast.error(data.message)

            if (!data.userData.isAccountVerified) {
                toast.error('You are not verified')
                navigate('/otp', { replace: true })
            }

        } catch (error) {

            toast.error(error.message)

        }
    }

    useEffect(() => {
        getAuthState()
    }, [])

    const value = {

        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData

    }

    return (
        <BackendContex.Provider value={value}>
            {props.children}
        </BackendContex.Provider>
    )
}

export default BackendContexProvider