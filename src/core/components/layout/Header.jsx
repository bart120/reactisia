import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">ISIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Marques</Nav.Link>
                            <NavDropdown title="Voitures" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Lister</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ajouter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}
export default Header;