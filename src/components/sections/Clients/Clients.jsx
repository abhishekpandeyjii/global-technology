import { clientsData } from '../../../data/siteData';
import './Clients.css';

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="clients-header">
          <span className="clients-subtitle">Trusted by Many</span>
          <h3 className="clients-title">We’ve Worked With Leading Enterprises</h3>
        </div>
        <div className="clients-wrapper">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <img src={client.logo} alt={client.name} className="client-logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
