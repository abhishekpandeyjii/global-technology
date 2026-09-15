import './SectionTitle.css';

const SectionTitle = ({ subtitle, title, highlight, description, align = 'center', light = false }) => {
  return (
    <div className={`section-title-wrapper ${align === 'left' ? 'text-left' : ''} ${light ? 'light' : ''}`}>
      {subtitle && (
        <div className="section-subtitle">{subtitle}</div>
      )}
      <div className="section-title">
        <h2>
          {title} {highlight && <span>{highlight}</span>}
        </h2>
      </div>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
