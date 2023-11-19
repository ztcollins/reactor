
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import crest from '../../assets/team_logo_transparent.png'

export default function BadgerBudsNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                Zachary Collins
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/art">Art</Nav.Link>
                    <Nav.Link>Code</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
