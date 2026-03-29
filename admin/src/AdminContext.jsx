import { createContext, useMemo } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (children) => {

    const value = useMemo(() => ({

    }), [])

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider