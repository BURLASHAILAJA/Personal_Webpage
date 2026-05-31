export const projects = [
  {
    tag: 'Healthcare MDM',
    client: 'Fortrea',
    title: 'Organization & Investigator MDM',
    desc: 'Designed and developed Organization & Investigator Models at Persistent Systems for Fortrea. Standardized data quality rules, resolved critical bugs, created Match Strategies for golden records, and verified integration flows to downstream systems (Veeva, Siebel).',
    metrics: [{ number: 'Veeva', label: 'Downstream Sync' }, { number: 'Siebel', label: 'Integration' }],
    tech: ['Profisee', 'Veeva', 'Siebel', 'Data Quality'],
  },
  {
    tag: 'Enterprise MDM',
    client: 'Fortune 500',
    title: 'Enterprise MDM Implementation',
    desc: 'Led end-to-end Profisee MDM implementation for a Fortune 500 manufacturing client, establishing golden record management for 2M+ customer records.',
    metrics: [{ number: '95%', label: 'Data Quality Score' }, { number: '40%', label: 'Duplicate Reduction' }],
    tech: ['Profisee', 'Azure', 'SQL Server'],
  },
  {
    tag: 'Data Engineering',
    client: 'Lexmark',
    title: 'Azure Data Pipeline Optimization',
    desc: 'Designed and optimized Azure Data Factory pipelines for real-time data integration across SAP and non-SAP systems using WebMethods.',
    metrics: [{ number: '60%', label: 'Processing Time ↓' }, { number: '99.9%', label: 'Pipeline Uptime' }],
    tech: ['ADF', 'WebMethods', 'SAP'],
  },
  {
    tag: 'Analytics',
    client: 'Recent',
    title: 'Databricks Transformation Solution',
    desc: 'Built scalable data transformation workflows on Databricks, enabling advanced analytics and machine learning capabilities for business intelligence.',
    metrics: [{ number: '5x', label: 'Query Performance' }, { number: 'TB+', label: 'Data Processed' }],
    tech: ['Databricks', 'PySpark', 'Delta Lake'],
  },
];

