import { createContext } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";


export const StaffContext = createContext()

const StaffContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [listEnquiry, setlistEnquiry] = useState([])
    const [eventList, setEventList] = useState([])

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

    const getEventList = async () => {

        try {

            const res = await axios.get(backendUrl + '/api/product/listProduct')

            if (res.data.success) {
                setEventList(res.data.product)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAllEnquiry()
        getEventList()
    }, [])

    const value = {

        backendUrl,
        listEnquiry, setlistEnquiry,
        getAllEnquiry,
        getEventList,
        eventList, setEventList

    }

    return (
        <StaffContext.Provider value={value}>
            {props.children}
        </StaffContext.Provider>
    )

}

export default StaffContextProvider