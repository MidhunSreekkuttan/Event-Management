import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const EventContext = createContext()

const EventContextProvider = (props) => {

    const [enquiry, setEnquiry] = useState({})

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