import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">
            Certifications &amp; <span className="gradient-text">Awards</span>
          </h2>
        </div>
        <div className="cert-grid">
          {certifications.map((c) => (
            <div key={c.title} className={`cert-badge${c.award ? ' award' : ''}`}>
              <div className={`badge-icon ${c.iconClass}`}>
                <span>{c.letter}</span>
              </div>
              <div className="badge-info">
                <h4>{c.title}</h4>
                <p>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
