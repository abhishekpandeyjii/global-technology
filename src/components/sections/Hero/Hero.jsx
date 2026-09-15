import Button from '../../common/Button/Button';
import { heroData, images } from '../../../data/siteData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src={images.heroBg} alt="Road Construction" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-subtitle">{heroData.subtitle}</div>
        <h1 className="hero-title">
          {heroData.title}
          <span className="highlight">{heroData.titleHighlight}</span>
        </h1>
        <p className="hero-description">{heroData.description}</p>
        <div className="hero-buttons">
          <Button variant="primary" size="lg" href="#services">
            {heroData.primaryBtn}
          </Button>
          <Button variant="secondary" size="lg" href="#contact">
            {heroData.secondaryBtn}
          </Button>
        </div>
      </div>

      <div className="hero-badge">
        <div className="hero-badge-inner">
          <span className="hero-badge-number">30+</span>
          <span className="hero-badge-text">Years Exp.</span>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
