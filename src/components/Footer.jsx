export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text">S&S</span>
            <p>AI Automation & Enterprise Data Systems</p>
          </div>
          <div className="footer-links">
            {['#about', '#expertise', '#projects', '#services', '#contact'].map((href) => (
              <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>
                {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
              </a>
            ))}
          </div>
          <div className="footer-social">
            <div className="social-group">
              <span>Sai:</span>
              <a href="https://www.linkedin.com/in/moguloju-sai-2b060b228/" target="_blank" rel="noopener noreferrer" aria-label="Sai LinkedIn">💼</a>
            </div>
            <div className="social-group">
              <span>Shailaja:</span>
              <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" aria-label="Shailaja LinkedIn">💼</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sai &amp; Shailaja. Open to International Operations &amp; Freelance Contracts.</p>
        </div>
      </div>
    </footer>
  );
}
