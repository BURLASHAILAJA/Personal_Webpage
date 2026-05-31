import { projects } from '../data/projects';

function tiltHandlers() {
  return {
    onMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    },
    onMouseLeave(e) {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    },
  };
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">
            Project <span className="gradient-text">Highlights</span>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card" {...tiltHandlers()}>
              <div className="project-header">
                <span className="project-tag">{p.tag}</span>
                <span className="project-year">{p.client}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-impact">
                {p.metrics.map((m) => (
                  <div className="impact-item" key={m.label}>
                    <span className="impact-number">{m.number}</span>
                    <span className="impact-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <ul className="project-tech">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
