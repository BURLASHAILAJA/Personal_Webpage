import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const selectors = [
      '.section-header',
      '.expertise-card',
      '.cert-badge',
      '.project-card',
      '.service-card',
      '.course-card',
      '.course-format-card',
      '.why-item',
      '.impact-card',
      '.tech-category',
      '.about-text',
      '.about-image',
      '.contact-info',
      '.contact-cta',
    ];

    const elements = [];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
        elements.push(el);
      });
    });

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}
