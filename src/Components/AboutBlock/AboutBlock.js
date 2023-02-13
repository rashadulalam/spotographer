import { Col, Container, Row } from "react-bootstrap"
import './AboutBlock.css';
import AuthorImage from '../../images/author.png'

const AboutBlock = (props) => {
    return (
        <>

            <Container className="py-5">
                <Row className="gx-5 d-flex align-items-center justify-content-center">
                    <Col lg={4}>
                        <div className="authorImage">
                        <img src={AuthorImage} alt="Autho" className="circle w-100" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="author_text">
                            <h4>I'm Biswajit Adhikary</h4>
                            <h2>About My Goal</h2>
                            <p>Hi, I'm Biswajit Adhikary. I have completed my MBS Degree. Now I'm learning Web Development in Programming Hero. My Goal is become an expert Web Developer. For achieve my goal I'm doing very hard work. Everyday I spend minimum 10 hours for learning new technologies and practising it. I believe that I can do the best in this area. Hard work is the key and I'm doing the hard work now.</p>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        
        
        </>
    )
}
export default AboutBlock