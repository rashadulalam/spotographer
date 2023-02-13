import {Container, Row} from 'react-bootstrap'
import './Gallery.css'
import SingleGal from '../SingleGal/SingleGal';
import SectionHeading  from "../SectionHeading/SectionHeading";
import { useEffect, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect( ()=> {
        fetch('galleries.json')
        .then( (res) => res.json())
        .then((data) => setImages(data))
    })
    return (
        <section className="gallery-area py-5">
            <Container>
                <SectionHeading heading="Some Moments" />
                <Row>

                    {
                        images.map((item) => (
                            <SingleGal item={item} key={item.id} />
                        ))
                    }

                </Row>
            </Container>
        </section>
    )
}
export default Gallery;