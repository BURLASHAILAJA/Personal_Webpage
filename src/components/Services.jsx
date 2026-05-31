import { services } from '../data/services';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">
            Services <span className="gradient-text">Available</span>
          </h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card${s.highlight ? ' highlight-card' : ''}`}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  dangerouslySetInnerHTML={{ __html: s.icon }} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
