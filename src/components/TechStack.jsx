import { techStack } from '../data/techStack';
import { useProficiencyBars } from '../hooks/useProficiencyBars';

export default function TechStack() {
  useProficiencyBars();

  return (
    <section className="section tech-stack" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tools &amp; Technologies</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </div>
        <div className="tech-categories">
          {techStack.map((cat) => (
            <div className="tech-category" key={cat.category}>
              <h4>{cat.category}</h4>
              <div className="tech-items">
                {cat.items.map((item) => (
                  <div className="tech-item" key={item.name}>
                    <span className="tech-name">{item.name}</span>
                    <div className="proficiency-bar">
                      <div className="proficiency" style={{ '--level': item.level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
