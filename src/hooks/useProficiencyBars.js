import { useEffect } from 'react';

export function useProficiencyBars() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.proficiency');
            bars.forEach((bar) => {
              const level = bar.style.getPropertyValue('--level');
              bar.style.width = '0';
              setTimeout(() => { bar.style.width = level; }, 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cats = document.querySelectorAll('.tech-category');
    cats.forEach((el) => observer.observe(el));

    return () => cats.forEach((el) => observer.unobserve(el));
  }, []);
}
