
import {Col, Button} from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    return (
        <Col lg={4}>
            <div className='single_service shadow-sm'>
                <img src={props.img} alt='test' className='w-100'/>
                <div className='p-3'>
                    <h3>{props.heading}</h3>
                    <h5>{props.price}</h5>
                    <p>{props.txt}</p>
                    <Button className='serviceBtn'>Book Now</Button>
                </div>
            </div>
        </Col>
    )
}

export default Service;