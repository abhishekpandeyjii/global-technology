import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ServiceCard from '../../cards/ServiceCard/ServiceCard';
import { services } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Our Services"
            title="Comprehensive"
            highlight="Geotechnical Solutions"
            description="At Global Geotech Engineering, we provide end-to-end geotechnical engineering solutions designed to meet complex project needs with precision, safety, and sustainability."
          />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
