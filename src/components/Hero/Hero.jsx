import './hero.scss';
import Container from '../Container/Container';

const Hero = ({ children }) => (
  <div className="hero">
    <div className='hero__overlay'></div>
    <Container>
      <div className='hero__content'>
        {children}
      </div>
    </Container>
  </div>
)

export default Hero;