import { createContext } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";


export const StaffContext = createContext()

const StaffContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [listEnquiry, setlistEnquiry] = useState([])

    const getAllEnquiry = async () => {

        try {

            const res = await axios.get(backendUrl + '/api/user/getAllEnquiry')

            if (res.data.response) {
                setlistEnquiry(res.data.response)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value = {

        backendUrl,
        listEnquiry, setlistEnquiry

    }

    useEffect(() => {
        getAllEnquiry()
    }, [])

    return (
        <StaffContext.Provider value={value}>
            {props.children}
        </StaffContext.Provider>
    )

}

export default StaffContextProvider