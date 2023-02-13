// import react, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';
import {Outlet, Link} from 'react-router-dom';
import './Header.css';
// import Home from '../MyRoutes/Home';
// import About from '../MyRoutes/About';
// import Blogs from '../MyRoutes/Blogs';
// import Login from '../MyRoutes/Login';
// import {Home, About, Blogs, Login} from '../../Pages';
const Header = () => {
    return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Logo} alt="Sport Photographer" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Outlet />
            </>
           
    )
}
export default Header;