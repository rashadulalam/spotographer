// import react, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';
import {NavLink, Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={Logo} alt="Sport Photographer" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
           
    )
}
export default Header;