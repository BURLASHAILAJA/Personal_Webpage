import { courses, courseFormats } from '../data/courses';

const OWNER_META = {
  sai: { label: 'Sai', cls: 'cyan' },
  shailaja: { label: 'Shailaja', cls: 'purple' },
};

export default function Courses() {
  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Learn From Us</span>
          <h2 className="section-title">
            Courses &amp; <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle-text">
            We teach the same tools we use in client work every day. Small batches, real projects, and direct access to us — no recycled slide decks.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((c) => {
            const owner = OWNER_META[c.owner];
            return (
              <div key={c.title} className={`course-card ${c.owner}`}>
                <div className="course-top">
                  <span className={`course-owner-badge ${owner.cls}`}>{owner.label}</span>
                  {c.badge && <span className="course-badge">{c.badge}</span>}
                </div>
                <h3>{c.title}</h3>
                <div className="course-meta">
                  <span>📊 {c.level}</span>
                  <span>⏱ {c.duration}</span>
                </div>
                <p>{c.desc}</p>
                <ul className="course-topics">
                  {c.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a
                  href={`mailto:saimoguloju2@gmail.com,shailajaburla7755@gmail.com?subject=Course%20Enquiry%3A%20${encodeURIComponent(c.title)}`}
                  className="btn btn-secondary course-cta"
                >
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>

        <div className="course-formats">
          {courseFormats.map((f) => (
            <div key={f.title} className="course-format-card">
              <span className="format-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
