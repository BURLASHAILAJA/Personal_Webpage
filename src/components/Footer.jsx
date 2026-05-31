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
            <span className="logo-text">SB</span>
            <p>Building Trusted Data Ecosystems</p>
          </div>
          <div className="footer-links">
            {['#about', '#expertise', '#projects', '#services', '#contact'].map((href) => (
              <a key={href} href={href} onClick={(e) => scrollTo(e, href)}>
                {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
              </a>
            ))}
          </div>
          <div className="footer-social">
            <a href="mailto:shailajaburla7755@gmail.com" aria-label="Email">📧</a>
            <a href="https://linkedin.com/in/burlashailaja" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Shailaja Burla. Open to International Opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
