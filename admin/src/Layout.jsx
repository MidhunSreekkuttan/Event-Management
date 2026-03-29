import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function Layout() {

    return (
        <>

            <div className="grid grid-cols-[280px_1fr]">
                <SideBar />
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            </div>

        </>
    )

}

export default Layout;