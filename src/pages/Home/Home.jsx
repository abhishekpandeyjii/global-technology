import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Services from '../../components/sections/Services/Services';
import Stats from '../../components/sections/Stats/Stats';
import Projects from '../../components/sections/Projects/Projects';
import WhyChooseUs from '../../components/sections/WhyChooseUs/WhyChooseUs';
import Team from '../../components/sections/Team/Team';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import CTA from '../../components/sections/CTA/CTA';
import Blog from '../../components/sections/Blog/Blog';
import Clients from '../../components/sections/Clients/Clients';
import RequestQuote from '../../components/sections/RequestQuote/RequestQuote';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <CTA />
      <Blog />
      <Clients />
      <RequestQuote />
    </div>
  );
};

export default Home;
