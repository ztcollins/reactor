
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BadgerBudsNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand as={Link} to="/">
                Zachary Collins
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                    <Nav.Link as={Link} to="/code">Coding Projects</Nav.Link>
                    <Nav.Link as={Link} to="/art">Art Projects</Nav.Link>
                    <Nav.Link as={Link} to="/games">Games Developed</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
