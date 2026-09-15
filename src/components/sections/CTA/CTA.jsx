import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Button from '../../common/Button/Button';
import { images, companyInfo } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './CTA.css';

const CTA = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta-background">
        <img src={images.ctaBg} alt="Geotechnical construction background" />
        <div className="cta-overlay"></div>
      </div>

      <div className="cta-shape cta-shape-1"></div>
      <div className="cta-shape cta-shape-2"></div>

      <div className="container">
        <div className="cta-content fade-in">
          <h2 className="cta-title">
            Need Expert <span>Geotechnical Engineers?</span>
          </h2>
          <p className="cta-description">
            We&apos;re ready to engineer resilient foundation, piling, marine investigation, and ground stabilization solutions for your project. Contact our expert team today for consultation.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="lg" href="#contact">
              Request a Quote
            </Button>
            <Button variant="secondary" size="lg" href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}>
              <FaPhoneAlt /> Call: {companyInfo.phones[0]}
            </Button>
            <Button variant="outline" size="lg" href={companyInfo.whatsappLink} target="_blank">
              <FaWhatsapp /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
