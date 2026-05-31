import { expertiseData } from '../data/expertise';

function tiltHandlers() {
  return {
    onMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    },
    onMouseLeave(e) {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    },
  };
}

export default function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Expertise</span>
          <h2 className="section-title">
            What I <span className="gradient-text">Specialize In</span>
          </h2>
        </div>
        <div className="expertise-grid">
          {expertiseData.map((card) => (
            <div
              key={card.title}
              className="expertise-card floating-card"
              style={{ '--delay': card.delay }}
              {...tiltHandlers()}
            >
              <div className={`card-icon${card.iconClass ? ' ' + card.iconClass : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  dangerouslySetInnerHTML={{ __html: card.icon }} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul className="card-tags">
                {card.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
