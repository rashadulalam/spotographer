
import {Col, Button} from 'react-bootstrap';
import './Service.css';

const Service = ({item}) => {
    return (
        <Col lg={4}>
            <div className='single_service shadow-sm'>
                <img src={item.img} alt='test' className='w-100'/>
                <div className='p-3'>
                    <h3>{item.name}</h3>
                    <h5>{item.price}</h5>
                    <p>{item.description}</p>
                    <Button className='serviceBtn'>Book Now</Button>
                </div>
            </div>
        </Col>
    )
}

export default Service;