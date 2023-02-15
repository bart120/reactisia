import { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        console.log('props: ', this.props);
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">ISIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <a href="/index2.html" target="_blank" className="nav-link" >Brands</a>
                            <NavDropdown title="Voitures" id="basic-nav-dropdown">
                                <div><Link to="/cars">Lister</Link></div>
                                <div><Link to="/cars/add">Ajouter</Link></div>
                            </NavDropdown>
                            {this.props.isConnected ?
                                (<p style={{ color: "#fff" }}>Bonjour {this.props.user?.name} </p>) :
                                (<Link className="nav-link" to="/auth/login">Connexion</Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}

const mapStateToProps = (stateStore) => {
    return { user: stateStore.auth.user, isConnected: stateStore.auth.isConnected };
}
export default connect(mapStateToProps)(Header);