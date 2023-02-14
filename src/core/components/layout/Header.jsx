import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">ISIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/brands">Marques</Link>
                            <NavDropdown title="Voitures" id="basic-nav-dropdown">
                                <div><Link to="/cars">Lister</Link></div>
                                <div><Link to="/cars/add">Ajouter</Link></div>
                            </NavDropdown>
                            <Link className="nav-link" to="/auth/login">Connexion</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}
export default Header;