import { useState } from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ProjectCard from '../../cards/ProjectCard/ProjectCard';
import Button from '../../common/Button/Button';
import { projects } from '../../../data/siteData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import './Projects.css';

const categories = ['all', 'Marine', 'Piling', 'Excavation', 'Micropiles', 'Rock Anchoring'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useScrollAnimation();

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="fade-in">
          <SectionTitle
            subtitle="Works Showcase"
            title="Our Work"
            highlight="Gallery & Projects"
            description="Explore our portfolio of specialized geotechnical, marine investigation, piling, and ground engineering works across India."
          />
        </div>

        <div className="projects-filter fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-more fade-in">
          <Button variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
