import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './TeamCard.css';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card fade-in">
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
        <div className="team-card-socials">
          <a href={member.socials.facebook} className="team-social-link" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href={member.socials.twitter} className="team-social-link" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href={member.socials.linkedin} className="team-social-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="team-card-info">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-designation">{member.designation}</p>
        {member.bio && <p className="team-card-bio">{member.bio}</p>}
      </div>
    </div>
  );
};

export default TeamCard;
