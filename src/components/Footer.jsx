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
            <span className="logo-text">S&amp;S</span>
            <p className="footer-brand-tagline">AI Automation &amp; Enterprise Data Systems</p>
            <p className="footer-brand-sub">Moguloju Sai &amp; Shailaja Burla</p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Services</span>
              {['#services', '#expertise', '#projects'].map((href) => (
                <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>
                  {href === '#services' ? 'View Services' : href === '#expertise' ? 'Expertise' : 'Portfolio'}
                </a>
              ))}
            </div>
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Company</span>
              {['#about', '#process', '#why-me', '#contact'].map((href) => (
                <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>
                  {href === '#about' ? 'About' : href === '#process' ? 'Process' : href === '#why-me' ? 'Why Us' : 'Contact'}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-social">
            <span className="footer-nav-heading">Connect</span>
            <div className="footer-social-row">
              <span className="social-label">Sai:</span>
              <a href="https://www.linkedin.com/in/moguloju-sai-2b060b228/" target="_blank" rel="noopener noreferrer" aria-label="Sai LinkedIn" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:saimoguloju2@gmail.com" aria-label="Sai Email" className="social-link">
                Email
              </a>
            </div>
            <div className="footer-social-row">
              <span className="social-label">Shailaja:</span>
              <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" aria-label="Shailaja LinkedIn" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:shailajaburla7755@gmail.com" aria-label="Shailaja Email" className="social-link">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sai &amp; Shailaja. Open to International Freelance Contracts. Remote-first.</p>
          <p className="footer-currencies">Accepting USD &nbsp;·&nbsp; EUR &nbsp;·&nbsp; GBP</p>
        </div>
      </div>
    </footer>
  );
}
