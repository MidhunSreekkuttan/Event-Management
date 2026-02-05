import { createContext } from "react";
import { products } from "../assets/assets";

export const EventContext = createContext()

const EventContextProvider = (props) => {

    const value = {

        products

    }

    return (

        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )

}

export default EventContextProvider