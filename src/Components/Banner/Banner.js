import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../images/banner1.jpg';
import Banner2 from '../../images/banner2.jpg';
import Banner3 from '../../images/banner3.jpg';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>SPOTOGRAPHER</h4>
          <h3>Sports Photographer</h3>
          <p>I Capture Sports Moments and Actions.</p>
          <Button className="sportBtn">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h4>SPOTOGRAPHER</h4>
          <h3>Sports Photographer</h3>
          <p>I Capture Sports Moments and Actions.</p>
          <Button className="sportBtn">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h4>SPOTOGRAPHER</h4>
          <h3>Sports Photographer</h3>
          <p>I Capture Sports Moments and Actions.</p>
          <Button className="sportBtn">More about me</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Banner;