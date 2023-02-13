import {Col} from 'react-bootstrap';

const Blog = (props) => {
    return (
        <>
            <Col lg={4}>
                <div className='single_blog'>
                    {
                        props.children
                    }
                </div>
            </Col>
        </>
    )
}
export default Blog;