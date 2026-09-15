import { FaArrowRight, FaHardHat, FaWater, FaBuilding, FaTools, FaCompass, FaAnchor } from 'react-icons/fa';
import './ServiceCard.css';

const iconMap = {
  FaHardHat: FaHardHat,
  FaWater: FaWater,
  FaBuilding: FaBuilding,
  FaTools: FaTools,
  FaCompass: FaCompass,
  FaAnchor: FaAnchor,
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <div className="service-card fade-in">
      <div className="service-card-number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="service-card-icon">
        {Icon && <Icon />}
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      <a href="#" className="service-card-link">
        Read More <FaArrowRight />
      </a>
    </div>
  );
};

export default ServiceCard;
