import { Hero, AboutBlock, Footer } from "../Components";
import AboutHero from '../images/about-hero.jpg';

const About = () => {
    return (
        <>
            <Hero heroImg={AboutHero} />
            <AboutBlock />
            <Footer />
        </>
    )
}
export default About;