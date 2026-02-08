'use client';
import { 
  FaHeadset, 
  FaCogs, 
  FaChartLine, 
  FaUserCheck, 
  FaNetworkWired, 
  FaTools, 
  FaShieldAlt 
} from 'react-icons/fa';

const services = [
  { 
    id: '01', 
    title: 'Contact Centre Operations',
    icon: <FaHeadset />,
    desc: 'Comprehensive contact centre solutions enabling seamless customer interactions through voice and digital channels.',
    subs: [
      'Inbound: Support, Helpdesk, Technical Assistance',
      'Outbound: Sales, Retention, Surveys',
      'Omnichannel Engagement Strategies'
    ]
  },
  { 
    id: '02', 
    title: 'Business Process Outsourcing',
    icon: <FaCogs />,
    desc: 'Scalable back-office and data management solutions that drive detailed operational efficiency.',
    subs: [
      'Data Entry & Processing',
      'Document Management Systems',
      'HR & Payroll Administration',
      'Finance & Accounting Support'
    ]
  },
  { 
    id: '03', 
    title: 'Growth Enablement',
    icon: <FaChartLine />,
    desc: 'Strategic programs designed to accelerate revenue, market expansion, and sales performance.',
    subs: [
      'Lead Generation & Qualification',
      'Appointment Setting',
      'Market Research & Analysis',
      'Sales Pipeline Management'
    ]
  },
  { 
    id: '04', 
    title: 'Customer Experience (CX)',
    icon: <FaUserCheck />,
    desc: 'Enterprise CX programs including journey optimization, quality governance, and experience design.',
    subs: [
      'CX Strategy & Design',
      'Customer Journey Mapping',
      'Satisfaction Surveys (CSAT/NPS)',
      'Quality Assurance Frameworks'
    ]
  },
  { 
    id: '05', 
    title: 'Technology & Integration',
    icon: <FaNetworkWired />,
    desc: 'Enterprise CRM implementation, automation frameworks, and system integration services.',
    subs: [
      'CRM Setup & Customization',
      'Workflow Automation',
      'API Integrations',
      'Reporting Dashboards'
    ]
  },
  { 
    id: '06', 
    title: 'Setup & Consulting',
    icon: <FaTools />,
    desc: 'End-to-end consulting for infrastructure, technology stack, and operational models.',
    subs: [
      'Infrastructure Planning',
      'Tech Stack Selection',
      'Process Re-engineering',
      'Change Management'
    ]
  },
  { 
    id: '07', 
    title: 'Governance & Risk',
    icon: <FaShieldAlt />,
    desc: 'Compliance governance, regulatory alignment, and operational risk management frameworks.',
    subs: [
      'Compliance Audits',
      'Risk Assessment',
      'Standard Operating Procedures (SOPs)',
      'Data Security Protocols'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="header-container">
           <span className="sub-header">Our Expertise</span>
           <h2 className="section-title">
             Enterprise Service <span className="text-primary-gradient">Portfolio</span>
           </h2>
           <p className="section-desc">
             Integrated solutions designed to support organizational performance, scalability, and customer lifecycle management.
           </p>
        </div>
        
        <div className="services-grid">
           {services.map((s, i) => (
             <div key={i} className="service-card group">
                <div className="card-header">
                   <div className="icon-wrapper">
                     {s.icon}
                   </div>
                   <span className="service-number">{s.id}</span>
                </div>
                
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.desc}</p>

                {s.subs && (
                  <ul className="sub-list">
                    {s.subs.map((item, j) => (
                      <li key={j} className="sub-item">
                        <span className="bullet">•</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
             </div>
           ))}
        </div>
      </div>
      
      <style jsx>{`
        .services-section {
          background-color: #f8fafc; /* Slate 50 */
        }

        .header-container {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .sub-header {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
        }

        .section-desc {
          color: #64748b;
          font-size: 1.15rem;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: #ffffff;
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: var(--primary);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.1); /* Primary light opacity */
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .service-card:hover .icon-wrapper {
          background: var(--primary);
          color: white;
        }

        .service-number {
          font-size: 3rem;
          font-weight: 900;
          color: #f1f5f9; /* Slate 100 */
          line-height: 1;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .card-text {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .sub-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid #f1f5f9;
          padding-top: 1.5rem;
        }

        .sub-item {
          font-size: 0.95rem;
          color: #475569;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .bullet {
          color: var(--primary);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .services-grid {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
