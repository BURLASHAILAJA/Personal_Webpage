export default function About() {
  const team = [
    {
      name: 'Moguloju Sai',
      initials: 'MS',
      role: 'AI Automation Engineer & LLM Orchestrator',
      desc: 'Specializes in scaling voice intelligence platforms (Vapi), designing RAG systems, and orchestrating multi-LLM networks (OpenAI, Claude, Gemini, Llama). Experienced in building autonomous agentic SRE workflows (LangGraph) and automated CRM integrations (OpenClaw, n8n).',
      highlights: [
        'Vapi Voice Intelligence Platform',
        'LangGraph Agentic Workflows',
        'OpenClaw & n8n Lead Gen Pipelines',
      ],
      color: 'cyan',
    },
    {
      name: 'Shailaja Burla',
      initials: 'SB',
      role: 'Master Data Management & Azure Data Engineer',
      desc: 'Expert in complete data life cycles, specializing in Profisee MDM data modeling, quality enforcement, and golden record strategy. Experienced in building enterprise-grade Azure data pipelines (ADF, Databricks, Delta Lake) and SAP integrations.',
      highlights: [
        'Profisee MDM certified Developer',
        'Azure Data Factory (ADF) & Databricks',
        'Veeva & Siebel Downstream Integrations',
      ],
      color: 'purple',
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
          <p className="section-subtitle-text" style={{ color: 'var(--color-text-secondary)', marginTop: '10px' }}>
            A powerful collaboration bridging advanced Artificial Intelligence with robust Enterprise Data Systems.
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
                <h4>Focus Areas &amp; Deliverables</h4>
                <ul>
                  {member.highlights.map((h, idx) => (
                    <li key={idx}>
                      <span className="bullet">✦</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
