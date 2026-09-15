import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Button from '../Button/Button';
import { navLinks, footerData, images, companyInfo } from '../../../data/siteData';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="navbar-topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <div className="topbar-item">
              <FaEnvelope />
              <a href={`mailto:${footerData.contact.email}`} className="topbar-link">{footerData.contact.email}</a>
            </div>
            <div className="topbar-item">
              <FaClock />
              <span>{footerData.contact.hours}</span>
            </div>
          </div>
          <div className="topbar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={companyInfo.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="topbar-wa"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={(e) => handleMenuClick(e, '#home')} aria-label="Global Geotech Engineering">
            <img src={images.logo} alt="Global Geotech Engineering" className="navbar-logo-img" />
          </a>

          <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => handleMenuClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-right">
            <a href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`} className="navbar-phone">
              <div className="phone-icon">
                <FaPhone />
              </div>
              <div className="phone-text-wrapper">
                <span className="phone-label">Call Us</span>
                <span className="phone-num">{companyInfo.phones[0]}</span>
              </div>
            </a>
            <Button
              variant="primary"
              size="sm"
              className="navbar-cta"
              href="#contact"
              onClick={(e) => handleMenuClick(e, '#contact')}
            >
              Get a Quote
            </Button>
            <div
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
