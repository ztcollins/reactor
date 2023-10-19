import { Outlet } from "react-router-dom";

import JavaEduNavbar from "./nav/JavaEduNavbar";
import JavaEduDataContext from "../contexts/JavaEduDataContext";

export default function FirstComponent() {

    return <div>
        <JavaEduNavbar />
        <div style={{ margin: "1rem" }}>
            <JavaEduDataContext.Provider value={"hello"}>
                <Outlet />
            </JavaEduDataContext.Provider>
        </div>
    </div>
}