import Container from 'react-bootstrap/Container';
import {Logo} from '../../Components';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer-area">
            <Container className='text-center'>
                <Logo />
                <p className='m-0'>&copy; 2022 Spotographer, All Rights Reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer;