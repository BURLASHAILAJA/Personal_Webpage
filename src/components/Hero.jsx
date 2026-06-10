import { useEffect, useRef } from 'react';

const TYPING_TEXTS = [
  'AI Agents & LLM Orchestration',
  'Voice Intelligence Platforms',
  'Enterprise MDM & Data Governance',
  'Azure Data Engineering & Databricks',
  'Workflow Automation & CRM Integration',
  'RAG Pipelines & Vector Search',
];

function useTypingEffect(texts) {
  const elRef = useRef(null);
  useEffect(() => {
    let textIndex = 0, charIndex = 0, isDeleting = false;
    let timer;

    function type() {
      const current = texts[textIndex];
      if (isDeleting) {
        if (elRef.current) elRef.current.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        if (elRef.current) elRef.current.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }
      let speed = isDeleting ? 50 : 90;
      if (!isDeleting && charIndex === current.length) { speed = 2200; isDeleting = true; }
      else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; speed = 400; }
      timer = setTimeout(type, speed);
    }
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [texts]);
  return elRef;
}

function useParallax() {
  const ref = useRef(null);
  useEffect(() => {
    const handler = () => {
      const scrolled = window.pageYOffset;
      if (ref.current && scrolled < window.innerHeight) {
        ref.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        ref.current.style.opacity = String(1 - scrolled / (window.innerHeight * 0.8));
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return ref;
}

function useStatsCounter() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll('.stat-number').forEach((el) => {
            const num = parseFloat(el.textContent);
            if (!isNaN(num) && num < 100) {
              const suffix = el.textContent.replace(/[0-9.]/g, '');
              const isDecimal = num % 1 !== 0;
              const start = performance.now();
              const animate = (now) => {
                const p = Math.min((now - start) / 2000, 1);
                const ease = 1 - Math.pow(1 - p, 4);
                el.textContent = (isDecimal ? (num * ease).toFixed(1) : Math.floor(num * ease)) + suffix;
                if (p < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
            }
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    const el = document.querySelector('.hero-stats');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);
}

export default function Hero() {
  const typingRef = useTypingEffect(TYPING_TEXTS);
  const contentRef = useParallax();
  useStatsCounter();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content" ref={contentRef}>
        <div className="availability-badge">
          <span className="pulse" />
          <span>Available for New Projects</span>
        </div>
        <h1 className="hero-title">
          AI Automation &amp;<br />
          <span className="gradient-text">Data Engineering Partners</span>
        </h1>
        <p className="hero-subtitle">
          <span ref={typingRef} />
          <span className="typing-cursor">|</span>
        </p>
        <p className="hero-description">
          Moguloju Sai (AI Engineer) &amp; Shailaja Burla (Data Engineer) — Your end-to-end technology team
        </p>
        <div className="hero-partner-tags">
          <span className="partner-tag cyan">Sai — AI &amp; Automation</span>
          <span className="hero-tag-divider">+</span>
          <span className="partner-tag purple">Shailaja — Data &amp; MDM</span>
        </div>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary" onClick={(e) => scrollTo(e, '#services')}>
            Explore Services
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollTo(e, '#contact')}>
            Schedule a Call
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat">
            <span className="stat-number">2M+</span>
            <span className="stat-label">Records Managed</span>
          </div>
          <div className="stat">
            <span className="stat-number">Fortune 500</span>
            <span className="stat-label">Client Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
