import SideBar from "../../components/event-management/SideBar";
import Navbar from "../../components/event-management/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Main = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // better & correct
    const loginPage = pathname === "/event-management/login";

    const [state, setState] = useState(true);

    // ✅ never navigate inside render
    useEffect(() => {
        if (state === false) {
            navigate("/event-management/add", { replace: true });
        }
    }, [state, navigate]);

    return (
        <div className="min-h-screen">
            {!loginPage && (
                <>
                    <div>
                        <Navbar />
                        <hr />
                    </div>

                    <div className="flex w-full">
                        <SideBar />
                    </div>
                </>
            )}
        </div>
    );
};

export default Main;