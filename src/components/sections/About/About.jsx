import { FaCheck } from 'react-icons/fa';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import { aboutData, images } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper fade-in-left">
            <div className="about-image-accent"></div>
            <div className="about-image">
              <img src={images.aboutImg} alt="About Global Geotech Engineering" />
            </div>
            <div className="about-experience-badge">
              <span className="about-exp-number">{aboutData.experience}</span>
              <span className="about-exp-text">{aboutData.experienceText}</span>
            </div>
          </div>

          <div className="about-content fade-in-right">
            <SectionTitle
              subtitle={aboutData.subtitle}
              title={aboutData.title}
              align="left"
            />
            <p className="about-text">{aboutData.description}</p>
            <p className="about-text">{aboutData.description2}</p>

            <div className="about-features">
              {aboutData.features.map((feature, index) => (
                <div className="about-feature-item" key={index}>
                  <div className="about-feature-icon">
                    <FaCheck />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" href="#services">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
