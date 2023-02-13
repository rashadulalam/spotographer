import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import './Banner.css';
import { useEffect, useState } from 'react';

const Banner = () => {

    const [myHero, setMyHero] = useState([]);

    useEffect(() => {
      fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setMyHero(data));
    }, [])

   

    return (
        <>
          <Carousel>

          {
            myHero.map( (item) => (
              <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.title}
              />
                <Carousel.Caption>
                  <h4>{item.subtitle}</h4>
                  <h3>{item.title}</h3>
                  <p>{item.txt}</p>
                  <Button className="sportBtn">More about me</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
          </Carousel>
        </>
    )
}
export default Banner;