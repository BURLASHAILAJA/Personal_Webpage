export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting Data Excellence</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a <strong>Master Data Management &amp; Data Engineering specialist</strong> with 5+ years of enterprise experience at industry leaders like <strong>TCS</strong> and <strong>Persistent Systems</strong>.
            </p>
            <p>
              My expertise spans the complete data lifecycle—from designing robust MDM solutions with Profisee to building scalable Azure data pipelines. I've had the privilege of working with international clients including <strong>Lexmark</strong>, delivering enterprise-grade data solutions that drive business value.
            </p>
            <p>
              Currently exploring the frontiers of <strong>AI and LLM technologies</strong>, I'm passionate about leveraging emerging tech to solve complex data challenges. With a strong foundation in statistics and machine learning, I bring a data-driven approach to every project.
            </p>
            <div className="about-highlights">
              {[
                { icon: '🌍', text: 'Remote-Ready & Timezone Flexible' },
                { icon: '💬', text: 'Excellent English Communication' },
                { icon: '🚀', text: 'Available to Start Immediately' },
              ].map((h) => (
                <div className="highlight" key={h.text}>
                  <span className="highlight-icon">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <span className="initials">SB</span>
              </div>
              <div className="frame-decoration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
