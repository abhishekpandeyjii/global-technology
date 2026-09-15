import { FaStar, FaQuoteRight } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card fade-in">
      <FaQuoteRight className="testimonial-quote-icon" />
      <div className="testimonial-stars">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div className="testimonial-author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
