import './Hero.css';
const Hero = (props) => {

    const backGround = {
        width: '100%',
        minHeight: '250px',
    }

    return (
        <>
            <section className="hero-area" style={backGround}>
                <img src={props.heroImg} alt="About" className='w-100' />
            </section>
        </>
    )
}

export default Hero;