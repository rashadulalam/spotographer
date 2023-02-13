import { Hero, SectionHeading, Footer} from "../Components";
import Blog from "../Components/Blog/Blog";
import {Container, Row} from 'react-bootstrap';
import AboutHero from '../images/about-hero.jpg';

const Blogs = () => {
   return (
    <>

        <Hero heroImg={AboutHero} />
        <SectionHeading heading="Questions Answer" />
        <Container className="mb-5">
            <Row className="gx-5">
            <Blog>
                <h3>Difference between authorization and authentication</h3>
                <p>Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin.</p>
            </Blog>
            <Blog>
                <h3>Difference between authorization and authentication</h3>
                <p>Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin.</p>
            </Blog>
            <Blog>
                <h3>Difference between authorization and authentication</h3>
                <p>Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin.</p>
            </Blog>
            </Row>
        </Container>
        <Footer />
        
       
    </>
   )
}
export default Blogs;