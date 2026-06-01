export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="availability-status">
                <span className="status-dot" />
                <span>Available for freelance projects starting immediately</span>
              </div>
              <div className="contact-methods">
                <div className="contact-method-group" style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', color: 'var(--color-accent-cyan)', marginBottom: '8px' }}>Moguloju Sai (AI & Automation)</h4>
                  <a href="mailto:saimoguloju2@gmail.com" className="contact-method" style={{ marginBottom: '5px' }}>
                    <span className="method-icon">📧</span>
                    <div className="method-details">
                      <span className="method-label">Email</span>
                      <span className="method-value">saimoguloju2@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/moguloju-sai-2b060b228/" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="method-icon">💼</span>
                    <div className="method-details">
                      <span className="method-label">LinkedIn</span>
                      <span className="method-value">linkedin.com/in/moguloju-sai-2b060b228</span>
                    </div>
                  </a>
                </div>

                <div className="contact-method-group" style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', color: 'var(--color-accent-purple)', marginBottom: '8px' }}>Shailaja Burla (Data & MDM)</h4>
                  <a href="mailto:shailajaburla7755@gmail.com" className="contact-method" style={{ marginBottom: '5px' }}>
                    <span className="method-icon">📧</span>
                    <div className="method-details">
                      <span className="method-label">Email</span>
                      <span className="method-value">shailajaburla7755@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <span className="method-icon">💼</span>
                    <div className="method-details">
                      <span className="method-label">LinkedIn</span>
                      <span className="method-value">linkedin.com/in/burlashailaja</span>
                    </div>
                  </a>
                </div>

                <div className="contact-method">
                  <span className="method-icon">📍</span>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-value">Hyderabad, India (Remote Global)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Ready to start a project?</h3>
            <p>Whether you need custom AI agents, LLM orchestration, Vapi voice integrations, or enterprise Profisee MDM solutions and Databricks data lakes—we have you covered.</p>
            <div className="cta-buttons">
              <a href="mailto:saimoguloju2@gmail.com,shailajaburla7755@gmail.com?subject=Project%20Inquiry" className="btn btn-primary btn-large">
                Email Both Partners
              </a>
            </div>
            <div className="currency-note">
              <span>💱</span> Accepting payments in USD, EUR, GBP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
