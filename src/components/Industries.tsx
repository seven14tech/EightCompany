'use client';
import { FaHeartbeat, FaChartLine, FaShoppingCart, FaPlane } from 'react-icons/fa';

const industries = [
  { name: 'Enterprise Architecture', icon: FaChartLine, desc: 'Scalable service architecture.' },
  { name: 'Structured Governance', icon: FaHeartbeat, desc: 'Operational frameworks.' },
  { name: 'Scalable Deployment', icon: FaPlane, desc: 'Flexible workforce models.' },
  { name: 'Performance Driven', icon: FaChartLine, desc: 'Defined SLAs and KPIs.' },
  { name: 'Regulatory Alignment', icon: FaHeartbeat, desc: 'Compliance & security.' },
  { name: 'Secure Infrastructure', icon: FaShoppingCart, desc: 'Data management systems.' },
  { name: 'Continuous Improvement', icon: FaChartLine, desc: 'Optimization methodologies.' },
  { name: 'Industry Expertise', icon: FaPlane, desc: 'Aligned operational knowledge.' },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>
          Strategic <span className="text-primary-gradient">Differentiators</span>
        </h2>
        
        <div className="industries-grid">
             {industries.map((ind, i) => (
               <div key={i} className="card industry-card">
                  <div className="icon-wrapper">
                    <ind.icon size={32} />
                  </div>
                  <h3 className="industry-name">{ind.name}</h3>
                  <p className="industry-desc">{ind.desc}</p>
               </div>
             ))}
        </div>
      </div>
      <style jsx>{`
        .industries-grid {
           display: grid; 
           grid-template-columns: repeat(4, 1fr); 
           gap: 2rem;
           margin-top: 3rem;
        }

        .industry-card {
           text-align: left;
           padding: 2rem;
           background: #ffffff;
           border: 1px solid var(--surface-border);
           border-radius: var(--radius-lg);
           transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
           display: flex;
           flex-direction: column;
           height: 100%;
        }
        
        .industry-card:hover {
           border-color: var(--primary);
           transform: translateY(-5px);
           box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(56, 189, 248, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .industry-card:hover .icon-wrapper {
          background: var(--primary);
          color: black;
        }

        .industry-name {
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
          color: var(--foreground);
        }

        .industry-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 1200px) {
           .industries-grid {
             grid-template-columns: repeat(2, 1fr);
           }
        }

        @media (max-width: 600px) {
           .industries-grid {
             grid-template-columns: 1fr;
           }
        }
      `}</style>
    </section>
  );
}
