import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Service from '../Service/Service';
import {SectionHeading} from '../../Components';
import { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    

    useEffect(()=> {
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <section className="services-area mb-5 py-5">
            <Container>
                <SectionHeading heading="Our Service" />
                <Row className="gx-5">
                    {
                        services.map( (item) => (
                            <Service item={item} key={item.id}/>
                        ) )
                    }
                   

                </Row>
            </Container>
        </section>
    )
}

export default Services;