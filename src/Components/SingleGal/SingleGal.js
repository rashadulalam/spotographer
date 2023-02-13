import {Col} from 'react-bootstrap';

const SingleGal = ( {item} ) => {
    return (
        <Col lg={3}>
            <div className='single_gal'>
                <img src={item.img} alt={item.name} className='w-100 mb-4'/>
            </div>
        </Col>
    )
}
export default SingleGal;