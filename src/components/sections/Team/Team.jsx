import SectionTitle from '../../common/SectionTitle/SectionTitle';
import TeamCard from '../../cards/TeamCard/TeamCard';
import { teamMembers } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './Team.css';

const Team = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="team section" id="team" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our"
            highlight="Leadership Staff"
            description="At Global Geotech Engineering, our leadership brings decades of on-site experience, innovation, and technical mastery in geotechnical and foundation engineering."
          />
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
