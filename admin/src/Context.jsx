import { useMemo } from "react";
import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = useMemo(() => ({

        backendUrl,

    }), [backendUrl])

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider