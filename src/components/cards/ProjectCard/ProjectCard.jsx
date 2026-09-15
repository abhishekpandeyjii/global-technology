import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card fade-in">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card-overlay">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-location">
          <FaMapMarkerAlt /> {project.location}
        </span>
      </div>
      <a href="#" className="project-card-link">
        <FaArrowRight />
      </a>
    </div>
  );
};

export default ProjectCard;
