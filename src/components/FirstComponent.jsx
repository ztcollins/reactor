import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import JavaEduNavbar from "./nav/JavaEduNavbar";
import JavaEduDataContext from "../contexts/JavaEduDataContext";

export default function FirstComponent() {

    return <div>
        <JavaEduNavbar />
        <Row>
            <Col>
                <div style={{ margin: "1rem" }}>
                    <JavaEduDataContext.Provider value={"hello"}>
                        <Outlet />
                    </JavaEduDataContext.Provider>
                </div>
            </Col>
        </Row>
        
    </div>
}