import {Col} from 'react-bootstrap';

const SingleGal = (props) => {
    return (
        <Col lg={3}>
            <div className='single_gal'>
                <img src={props.image} alt="Gallery" className='w-100 mb-4'/>
            </div>
        </Col>
    )
}
export default SingleGal;