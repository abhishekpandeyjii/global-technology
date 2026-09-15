import { FaProjectDiagram, FaSmile, FaUsers, FaTrophy } from 'react-icons/fa';
import useCounter from '../../../hooks/useCounter';
import { stats } from '../../../data/siteData';
import './Stats.css';

const iconMap = {
  FaProjectDiagram: FaProjectDiagram,
  FaSmile: FaSmile,
  FaUsers: FaUsers,
  FaTrophy: FaTrophy,
};

const StatItem = ({ stat }) => {
  const { count, ref } = useCounter(stat.value);
  const Icon = iconMap[stat.icon];

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon">
        {Icon && <Icon />}
      </div>
      <div className="stat-number">
        {count}<span>{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
