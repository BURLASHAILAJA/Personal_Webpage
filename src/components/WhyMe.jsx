import { whyMe, processSteps } from '../data/services';

export default function WhyMe() {
  return (
    <>
      <section className="section process" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="section-subtitle-text">
              From first call to production — a transparent, structured process with no surprises.
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="process-step">
                <div className="step-left">
                  <div className="step-number">{step.step}</div>
                  {idx < processSteps.length - 1 && <div className="step-connector" />}
                </div>
                <div className="step-body">
                  <span className="step-icon">{step.icon}</span>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-me" id="why-me">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              The <span className="gradient-text">S&amp;S Advantage</span>
            </h2>
          </div>
          <div className="why-grid">
            {whyMe.map((item) => (
              <div className="why-item" key={item.title}>
                <span className="why-icon">{item.icon}</span>
                <div className="why-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
