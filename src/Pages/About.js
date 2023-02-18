import { Hero, AboutBlock } from "../Components";
import AboutHero from '../images/about-hero.jpg';

const About = () => {
    return (
        <>
            <Hero heroImg={AboutHero} />
            <AboutBlock />
        </>
    )
}
export default About;