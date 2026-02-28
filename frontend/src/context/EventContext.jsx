import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendContex } from "./ConnectBackendContex";

export const EventContext = createContext()

const EventContextProvider = (props) => {

    const { backendUrl } = useContext(BackendContex)

    const [enquiry, setEnquiry] = useState({})

    const [products, setProducts] = useState([])

    const addEnquiry = async (itemId) => {

        if (enquiry[itemId]) {
            toast.error("You already submitted your enquiry");
            return;
        }

        // ✅ add new enquiry
        setEnquiry(prev => ({
            ...prev,
            [itemId]: true
        }));

        toast.success("Enquiry submitted successfully");
    }

    const getEventList = async () => {

        try {

            const response = await axios.get(backendUrl + '/api/product/listProduct')

            if (response.data.success) {
                setProducts(response.data.product)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getEventList()
    }, [])

    const value = {

        products, enquiry, addEnquiry

    }

    return (

        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )

}

export default EventContextProvider