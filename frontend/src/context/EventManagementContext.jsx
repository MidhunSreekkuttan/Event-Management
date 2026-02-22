import { createContext } from "react";

export const EventManagementContext = createContext()

const EventManagementContextProvider = (props) => {

    const value = {

    }

    return (

        <EventManagementContext.Provider value={value}>
            {props.children}
        </EventManagementContext.Provider>

    )

}

export default EventManagementContextProvider