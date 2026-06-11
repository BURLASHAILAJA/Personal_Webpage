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
              {['#services', '#courses', '#expertise', '#projects'].map((href) => (
                <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>
                  {href === '#services' ? 'View Services' : href === '#courses' ? 'Courses & Training' : href === '#expertise' ? 'Expertise' : 'Portfolio'}
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
              <span className="social-label">Sai</span>
              <a href="https://www.linkedin.com/in/moguloju-sai-2b060b228/" target="_blank" rel="noopener noreferrer" aria-label="Sai on LinkedIn" className="social-icon-link">
                <img src="/linkedin.svg" alt="LinkedIn" width="18" height="18" />
              </a>
              <a href="https://github.com/Saimoguloju" target="_blank" rel="noopener noreferrer" aria-label="Sai on GitHub" className="social-icon-link">
                <img src="/github.svg" alt="GitHub" width="18" height="18" />
              </a>
              <a href="mailto:saimoguloju2@gmail.com" className="social-link">
                saimoguloju2@gmail.com
              </a>
            </div>
            <div className="footer-social-row">
              <span className="social-label">Shailaja</span>
              <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" aria-label="Shailaja on LinkedIn" className="social-icon-link">
                <img src="/linkedin.svg" alt="LinkedIn" width="18" height="18" />
              </a>
              <a href="https://github.com/BURLASHAILAJA" target="_blank" rel="noopener noreferrer" aria-label="Shailaja on GitHub" className="social-icon-link">
                <img src="/github.svg" alt="GitHub" width="18" height="18" />
              </a>
              <a href="mailto:shailajaburla7755@gmail.com" className="social-link">
                shailajaburla7755@gmail.com
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
