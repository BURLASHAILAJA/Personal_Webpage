import { impact } from '../data/services';

export default function Impact() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Track Record</span>
          <h2 className="section-title">
            Impact &amp; <span className="gradient-text">Recognition</span>
          </h2>
        </div>
        <div className="impact-grid">
          {impact.map((card) => (
            <div className="impact-card" key={card.title}>
              <div className="impact-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
