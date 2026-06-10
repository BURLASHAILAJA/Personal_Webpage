import { saiServices, shailajaServices } from '../data/services';

function ServiceCard({ s }) {
  return (
    <div className={`service-card${s.highlight ? ' highlight-card' : ''}`}>
      <div className="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          dangerouslySetInnerHTML={{ __html: s.icon }} />
      </div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <span className="service-tag">{s.tag}</span>
    </div>
  );
}

const engagementCard = {
  icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  title: 'Flexible Engagement',
  desc: 'Hourly, project-based, or monthly retainer. Remote-first. USD / EUR / GBP accepted.',
  tag: '💼 Hire Us',
  highlight: true,
};

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle-text">
            Two specialized engineers. One unified team. End-to-end AI and data solutions for modern businesses.
          </p>
        </div>

        <div className="services-partner-section">
          <div className="partner-section-label cyan">
            <span className="partner-dot" />
            <span>Moguloju Sai — AI &amp; Automation</span>
          </div>
          <div className="services-grid">
            {saiServices.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
        </div>

        <div className="services-partner-section">
          <div className="partner-section-label purple">
            <span className="partner-dot" />
            <span>Shailaja Burla — Data &amp; MDM</span>
          </div>
          <div className="services-grid">
            {shailajaServices.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
        </div>

        <div className="services-engagement-row">
          <ServiceCard s={engagementCard} />
        </div>
      </div>
    </section>
  );
}
