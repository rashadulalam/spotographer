import {Container, Row, Col} from 'react-bootstrap'
import './Gallery.css'
import Gal1 from '../../images/gallery-one.jpg';
import Gal2 from '../../images/gallery-two.jpg';
import Gal3 from '../../images/gallery-three.jpg';
import Gal4 from '../../images/gallery-four.jpg';
import Gal5 from '../../images/gallery-five.jpg';
import Gal6 from '../../images/gallery-seven.jpg';
import Gal7 from '../../images/gallery-ten.jpg';
import Gal8 from '../../images/gallery-nine.jpg';
import SingleGal from '../SingleGal/SingleGal';

const Gallery = () => {
    return (
        <section className="gallery-area py-5">
            <Container>
                <h3 className='text-center mb-5 section-title'>Some Moments</h3>
                <Row>

                    <SingleGal image={Gal1} />
                    <SingleGal image={Gal2} />
                    <SingleGal image={Gal3} />
                    <SingleGal image={Gal4} />
                    <SingleGal image={Gal5} />
                    <SingleGal image={Gal6} />
                    <SingleGal image={Gal7} />
                    <SingleGal image={Gal8} />

                </Row>
            </Container>
        </section>
    )
}
export default Gallery;