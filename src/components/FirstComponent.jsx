import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import PortNavbar from "./nav/PortNavbar";
import PortDataContext from "../contexts/PortDataContext";

export default function FirstComponent() {

    return <div>
        <PortNavbar />
        <div style={{ margin: "1rem", marginRight: "20rem", marginLeft: "20rem", backgroundColor: "#F9F9F9", borderRadius: "20px", padding: "4rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
            <PortDataContext.Provider value={"hello"}>
                <Outlet />
            </PortDataContext.Provider>
        </div>     
    </div>
}