import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendContex } from "./ConnectBackendContex";

export const EventContext = createContext()

axios.defaults.withCredentials = true

const EventContextProvider = (props) => {

    const { backendUrl } = useContext(BackendContex)

    const [products, setProducts] = useState([])
    const [listproducts, setlistProducts] = useState([])
    const [enquiryList, setEnquiryList] = useState([])
    const [clientData, setClientData] = useState([])
    const [userBooking, setuserBooking] = useState([])

    {/*Getting User seeing Product List*/ }
    const getEventList = useCallback(async () => {

        try {

            const response = await axios.get(backendUrl + '/api/product/listProduct')

            if (response.data.success) {
                setProducts(response.data.product)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    {/*Getting Event Management teams seeing Product List*/ }
    const listProduct = useCallback(async () => {

        try {

            const res = await axios.get(backendUrl + '/api/product/ownerListProduct')
            if (res.data.success) {
                setlistProducts(res.data.product)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    //getting users enquiries
    const listEnquiry = useCallback(async () => {

        try {

            const res = await axios.get(backendUrl + '/api/user/getEnquiry')
            if (res.data.success) {
                setEnquiryList(res.data.response)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    {/*Access data for event managemnet teams*/ }
    const getClientData = useCallback(async () => {

        try {

            const res = await axios.get(backendUrl + '/api/booking/allOrderEventManagement')

            if (res.data.success) {
                setClientData(res.data.bookings)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    {/*Access data for users*/ }
    const getUserbooking = useCallback(async () => {

        try {

            const res = await axios.get(backendUrl + '/api/booking/userBooking')

            if (res.data.orders) {
                setuserBooking(res.data.orders)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }, [backendUrl])

    // listProduct()
    //  listEnquiry()
    //  getClientData()
    //  getUserbooking()

    useEffect(() => {
        getEventList()
    }, [getEventList])

    const value = useMemo(() => ({
        products,
        listproducts, setlistProducts, listProduct,
        enquiryList, setEnquiryList,
        clientData, setClientData,
        userBooking, setuserBooking,
        getClientData,
        listEnquiry,
        getUserbooking,
        getEventList
    }), [products, listproducts, enquiryList, clientData, userBooking, getClientData, listProduct, listEnquiry,
        getUserbooking, getEventList])

    return (

        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )

}

export default EventContextProvider