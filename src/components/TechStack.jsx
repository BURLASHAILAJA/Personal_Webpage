import { techStack } from '../data/techStack';
import { useProficiencyBars } from '../hooks/useProficiencyBars';

const PARTNER_LABEL = {
  sai: { text: 'Sai', cls: 'cyan' },
  shailaja: { text: 'Shailaja', cls: 'purple' },
  shared: { text: 'Shared', cls: 'shared' },
};

export default function TechStack() {
  useProficiencyBars();

  return (
    <section className="section tech-stack" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">
            Our Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle-text">
            Industry-grade tools across AI orchestration, cloud data platforms, and enterprise integration.
          </p>
        </div>
        <div className="tech-categories">
          {techStack.map((cat) => {
            const pl = PARTNER_LABEL[cat.partner];
            return (
              <div className="tech-category" key={cat.category}>
                <div className="tech-category-header">
                  {pl && <span className={`tech-partner-badge ${pl.cls}`}>{pl.text}</span>}
                  <h4>{cat.category}</h4>
                </div>
                <div className="tech-items">
                  {cat.items.map((item) => (
                    <div className="tech-item" key={item.name}>
                      <span className="tech-name">{item.name}</span>
                      <div className="proficiency-bar">
                        <div className="proficiency" style={{ '--level': item.level }} />
                      </div>
                      <span className="tech-level">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
