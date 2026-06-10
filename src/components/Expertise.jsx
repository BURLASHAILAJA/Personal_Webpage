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

const OWNER_LABELS = {
  sai: { label: 'Sai', cls: 'cyan' },
  shailaja: { label: 'Shailaja', cls: 'purple' },
};

export default function Expertise() {
  const saiCards = expertiseData.filter((c) => c.owner === 'sai');
  const shailajaCards = expertiseData.filter((c) => c.owner === 'shailaja');

  const renderCard = (card) => {
    const owner = OWNER_LABELS[card.owner];
    return (
      <div
        key={card.title}
        className={`expertise-card floating-card`}
        style={{ '--delay': card.delay }}
        {...tiltHandlers()}
      >
        {owner && (
          <span className={`expertise-owner-badge ${owner.cls}`}>{owner.label}</span>
        )}
        <div className={`card-icon${card.iconClass ? ' ' + card.iconClass : ''}${card.owner === 'sai' ? ' sai' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            dangerouslySetInnerHTML={{ __html: card.icon }} />
        </div>
        <h3>{card.title}</h3>
        <p>{card.desc}</p>
        <ul className="card-tags">
          {card.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    );
  };

  return (
    <section className="section expertise" id="expertise">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Expertise</span>
          <h2 className="section-title">
            What We <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="section-subtitle-text">
            Two specialized engineers covering the full spectrum — from AI agents to enterprise data platforms.
          </p>
        </div>

        <div className="expertise-partner-block">
          <div className="partner-section-label cyan">
            <span className="partner-dot" />
            <span>Moguloju Sai — AI &amp; Automation</span>
          </div>
          <div className="expertise-grid">
            {saiCards.map(renderCard)}
          </div>
        </div>

        <div className="expertise-partner-block">
          <div className="partner-section-label purple">
            <span className="partner-dot" />
            <span>Shailaja Burla — Data &amp; MDM</span>
          </div>
          <div className="expertise-grid">
            {shailajaCards.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
