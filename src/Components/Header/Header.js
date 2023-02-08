import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={Logo} alt="Sport Photographer" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Blog</Nav.Link>
                    <Nav.Link href="#home">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;