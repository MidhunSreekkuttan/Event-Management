import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendContex } from "./ConnectBackendContex";

export const EventContext = createContext()

const EventContextProvider = (props) => {

    const { backendUrl } = useContext(BackendContex)

    const [products, setProducts] = useState([])
    const [listproducts, setlistProducts] = useState([])
    const [enquiryList, setEnquiryList] = useState([])

    {/*Getting User seeing Product List*/ }
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

    {/*Getting Event Management teams seeing Product List*/ }
    const listProduct = async () => {

        try {

            const res = await axios.get(backendUrl + '/api/product/ownerListProduct')
            if (res.data.success) {
                setlistProducts(res.data.product)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    //getting users enquiries
    const listEnquiry = async () => {

        try {

            const res = await axios.get(backendUrl + '/api/user/getEnquiry')
            if (res.data.success) {
                setEnquiryList(res.data)
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getEventList()
        listProduct()
        listEnquiry()
    }, [])

    const value = {

        products,
        listproducts, setlistProducts, listProduct,
        enquiryList, setEnquiryList

    }

    return (

        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )

}

export default EventContextProvider