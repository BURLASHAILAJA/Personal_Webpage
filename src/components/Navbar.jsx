import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const links = [
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => scrollTo(e, '#hero')}>
          <span className="logo-text">S&S</span>
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          id="navToggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" onClick={(e) => scrollTo(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-link nav-cta" onClick={(e) => scrollTo(e, '#contact')}>
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
