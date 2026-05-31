import { whyMe } from '../data/services';

export default function WhyMe() {
  return (
    <section className="section why-me" id="why-me">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Me</span>
          <h2 className="section-title">
            Your Ideal <span className="gradient-text">Data Partner</span>
          </h2>
        </div>
        <div className="why-grid">
          {whyMe.map((item) => (
            <div className="why-item" key={item.title}>
              <span className="why-check">✓</span>
              <div className="why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
