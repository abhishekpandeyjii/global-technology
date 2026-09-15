import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import { footerData } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './RequestQuote.css';

const RequestQuote = () => {
  const sectionRef = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your request has been submitted. We will get back to you shortly.');
  };

  return (
    <section className="request-quote section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Contact Us"
            title="Request a Free"
            highlight="Quote Today"
            description="Get in touch with our team for a free consultation and quote on your next construction project."
          />
        </div>

        <div className="request-quote-grid">
          <div className="rq-info fade-in-left">
            <p className="rq-info-text">
              Have a project in mind? Reach out to us using the contact information below or fill out the form. Our team will get back to you within 24 hours.
            </p>

            <div className="rq-info-items">
              <div className="rq-info-item">
                <div className="rq-info-icon"><FaMapMarkerAlt /></div>
                <div className="rq-info-content">
                  <h4>Our Office</h4>
                  <p>{footerData.contact.address}</p>
                </div>
              </div>
              <div className="rq-info-item">
                <div className="rq-info-icon"><FaPhoneAlt /></div>
                <div className="rq-info-content">
                  <h4>Phone Number</h4>
                  <p>{footerData.contact.phone}</p>
                </div>
              </div>
              <div className="rq-info-item">
                <div className="rq-info-icon"><FaEnvelope /></div>
                <div className="rq-info-content">
                  <h4>Email Address</h4>
                  <p>{footerData.contact.email}</p>
                </div>
              </div>
              <div className="rq-info-item">
                <div className="rq-info-icon"><FaClock /></div>
                <div className="rq-info-content">
                  <h4>Working Hours</h4>
                  <p>{footerData.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rq-form-wrapper fade-in-right">
            <h3 className="rq-form-title">Get a Free Quote</h3>
            <p className="rq-form-subtitle">Fill out the form below and we&apos;ll contact you soon.</p>

            <form className="rq-form" onSubmit={handleSubmit}>
              <div className="rq-form-row">
                <div className="rq-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="rq-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="rq-form-row">
                <div className="rq-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 97024 98203" />
                </div>
                <div className="rq-form-group">
                  <label htmlFor="service">Select Service</label>
                  <select id="service">
                    <option value="">Choose a service...</option>
                    <option>Excavations Services</option>
                    <option>Marine Geotechnical</option>
                    <option>Piling Services</option>
                    <option>Micropiles</option>
                    <option>Geotechnical Investigation</option>
                    <option>Rock Anchoring</option>
                  </select>
                </div>
              </div>
              <div className="rq-form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell us about your project..." rows="5"></textarea>
              </div>
              <Button variant="primary" type="submit">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
