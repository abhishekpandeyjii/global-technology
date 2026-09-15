import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { footerData, images, companyInfo } from '../../../data/siteData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about">
            <div className="footer-logo">
              <img src={images.logo} alt="Global Geotech Engineering" className="footer-logo-img" />
            </div>
            <p className="footer-about-text">{footerData.about}</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-social-link footer-wa" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-column-title">Quick Links</h3>
            <div className="footer-links">
              {footerData.quickLinks.map((link, index) => (
                <a href={link.href} className="footer-link" key={index}>
                  <FaChevronRight /> {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-column-title">Our Services</h3>
            <div className="footer-links">
              {footerData.serviceLinks.map((service, index) => (
                <a href="#services" className="footer-link" key={index}>
                  <FaChevronRight /> {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-column-title">Contact Info</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaMapMarkerAlt /></div>
                <div className="footer-contact-text">{footerData.contact.address}</div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaPhoneAlt /></div>
                <div className="footer-contact-text">
                  <a href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`} className="footer-contact-link">{companyInfo.phones[0]}</a>
                  <br />
                  <a href={`tel:${companyInfo.phones[1].replace(/[^0-9+]/g, '')}`} className="footer-contact-link">{companyInfo.phones[1]}</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaEnvelope /></div>
                <div className="footer-contact-text">
                  <a href={`mailto:${footerData.contact.email}`} className="footer-contact-link">{footerData.contact.email}</a>
                  <br />
                  <a href={`mailto:${footerData.contact.accountEmail}`} className="footer-contact-link">{footerData.contact.accountEmail}</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon"><FaClock /></div>
                <div className="footer-contact-text">{footerData.contact.hours}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <span>Global Geotech Engineering</span>. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
