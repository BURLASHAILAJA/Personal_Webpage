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
                <a href="mailto:shailajaburla7755@gmail.com" className="contact-method">
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
                <div className="contact-method">
                  <span className="method-icon">📍</span>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-value">Hyderabad, India (Remote Global)</span>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">🕐</span>
                  <div className="method-details">
                    <span className="method-label">Timezone</span>
                    <span className="method-value">IST (UTC+5:30) | Flexible Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Ready to start a project?</h3>
            <p>Whether you need MDM consulting, Azure data engineering, or Databricks solutions—I'm here to help your data work harder for your business.</p>
            <div className="cta-buttons">
              <a href="mailto:shailajaburla7755@gmail.com?subject=Project%20Inquiry" className="btn btn-primary btn-large">
                Start a Conversation
              </a>
              <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Connect on LinkedIn
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
