export default function About() {
  const team = [
    {
      name: 'Moguloju Sai',
      initials: 'MS',
      role: 'AI Engineer & Automation Specialist',
      desc: 'Sai builds AI systems that actually run in production: voice agents on Vapi handling thousands of calls a day, n8n and OpenClaw automations that take repetitive work off your plate, and LangGraph agents for DevOps and incident response.',
      highlights: [
        'Vapi Voice Intelligence & RAG Pipelines',
        'LangGraph Autonomous Agents (OpenSRE)',
        'OpenClaw & n8n Workflow Automation',
      ],
      color: 'cyan',
      email: 'saimoguloju2@gmail.com',
      linkedin: 'https://www.linkedin.com/in/moguloju-sai-2b060b228/',
      github: 'https://github.com/Saimoguloju',
    },
    {
      name: 'Shailaja Burla',
      initials: 'SB',
      role: 'Data Engineer & MDM Consultant',
      desc: 'Shailaja has spent 5+ years building enterprise data platforms for Fortune 500 clients in manufacturing and healthcare: Profisee MDM implementations, golden record strategy, and Azure pipelines with ADF and Databricks.',
      highlights: [
        'Profisee MDM Certified Developer (LP1 & LP4)',
        'Azure ADF, Databricks & Delta Lake',
        'Veeva, Siebel & SAP Downstream Integrations',
      ],
      color: 'purple',
      email: 'shailajaburla7755@gmail.com',
      linkedin: 'https://linkedin.com/in/burlashailaja',
      github: 'https://github.com/BURLASHAILAJA',
    },
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Partners</span>
          </h2>
          <p className="section-subtitle-text">
            A freelance partnership combining advanced AI engineering with enterprise data expertise — delivering end-to-end technology solutions globally.
          </p>
        </div>

        <div className="about-team-grid">
          {team.map((member) => (
            <div key={member.name} className={`about-member-card ${member.color}`}>
              <div className="member-header">
                <div className="member-avatar">
                  <span>{member.initials}</span>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                </div>
              </div>
              <p className="member-desc">{member.desc}</p>
              <div className="member-highlights">
                <h4>Key Deliverables</h4>
                <ul>
                  {member.highlights.map((h, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="member-links">
                <a href={`mailto:${member.email}`} className="member-link">
                  <span>📧</span> {member.email}
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-link">
                  <img src="/linkedin.svg" alt="" width="16" height="16" className="inline-icon" /> LinkedIn Profile
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="member-link">
                  <img src="/github.svg" alt="" width="16" height="16" className="inline-icon" /> GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
