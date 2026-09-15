import SectionTitle from '../../common/SectionTitle/SectionTitle';
import TestimonialCard from '../../cards/TestimonialCard/TestimonialCard';
import { testimonials } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="testimonials section" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients"
            highlight="Say About Us"
            description="Hear from our satisfied clients about their experience working with Roadly on their construction projects."
          />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
