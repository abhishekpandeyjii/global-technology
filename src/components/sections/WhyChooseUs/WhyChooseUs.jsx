import { FaPlay, FaUserTie, FaGem, FaClock, FaHeadset } from 'react-icons/fa';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { whyChooseUsData, images } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './WhyChooseUs.css';

const iconMap = {
  FaUserTie: FaUserTie,
  FaGem: FaGem,
  FaClock: FaClock,
  FaHeadset: FaHeadset,
};

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="why-choose-us section" ref={sectionRef}>
      <div className="container">
        <div className="why-grid">
          <div className="why-content fade-in-left">
            <SectionTitle
              subtitle={whyChooseUsData.subtitle}
              title={whyChooseUsData.title}
              align="left"
            />
            <p className="about-text" style={{ marginBottom: '10px' }}>
              {whyChooseUsData.description}
            </p>

            <div className="why-features">
              {whyChooseUsData.features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div className="why-feature-card" key={index}>
                    <div className="why-feature-icon">
                      {Icon && <Icon />}
                    </div>
                    <h4 className="why-feature-title">{feature.title}</h4>
                    <p className="why-feature-desc">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="why-image-wrapper fade-in-right">
            <div className="why-image">
              <img src={images.aboutImg} alt="Why Choose Us" />
            </div>
            <button className="why-video-btn" aria-label="Play video">
              <FaPlay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
