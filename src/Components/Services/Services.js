import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service1 from '../../images/service-one.jpg';
import service2 from '../../images/service-two.jpg';
import service3 from '../../images/service-three.jpg';
import Service from '../Service/Service';

const Services = () => {
    return (
        <section className="services-area mb-5 py-5">
            <Container>
                <h3 className='text-center mb-5 section-title'>My Service</h3>
                <Row className="gx-5">

                    <Service 
                        img={service1}
                        heading="Sporting Events Photograph"
                        price="$300"
                        txt="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
                    />

                    <Service 
                        img={service2}
                        heading="Sporting Events Photograph"
                        price="$150"
                        txt="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
                    />
                    <Service 
                        img={service3}
                        heading="Sporting Events Photograph"
                        price="$30"
                        txt="Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
                    />

                </Row>
            </Container>
        </section>
    )
}

export default Services;