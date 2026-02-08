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
          Corporate <span className="text-primary-gradient">Strategy</span>
        </h2>
        
        <div className="strategy-grid">
           {/* Column 1: Value Proposition */}
           <div className="strategy-col">
             <div className="col-header">
               <div className="icon-wrapper">
                  <FaChartLine size={24} />
               </div>
               <h3>Corporate Value Proposition</h3>
               <p className="col-desc">
                 We partner with organizations to transform operational complexity into structured, efficient, and scalable business systems.
               </p>
             </div>
             
             <ul className="strategy-list">
               {[
                 "Enterprise BPO & Shared Services Solutions",
                 "Multi-channel Contact Centre Operations",
                 "Customer Experience Transformation",
                 "Revenue Enablement & Growth Services",
                 "Process Optimization & Automation",
                 "Technology-Driven Service Models",
                 "Governance, Risk & Compliance Frameworks"
               ].map((item, i) => (
                 <li key={i}>
                   <FaHeartbeat className="list-icon" />
                   {item}
                 </li>
               ))}
             </ul>
           </div>

           {/* Column 2: Differentiators */}
           <div className="strategy-col">
             <div className="col-header">
               <div className="icon-wrapper">
                  <FaPlane size={24} />
               </div>
               <h3>Strategic Differentiators</h3>
               <p className="col-desc">
                  Our operational excellence is built on a foundation of structured governance, scalable frameworks, and secure infrastructure.
               </p>
             </div>
             
             <ul className="strategy-list">
               {[
                 "Enterprise-grade service architecture",
                 "Structured governance & operational frameworks",
                 "Scalable workforce deployment models",
                 "Performance-driven service delivery",
                 "Regulatory and compliance alignment",
                 "Secure data management infrastructure",
                 "Continuous improvement methodologies",
                 "Industry-aligned operational expertise"
               ].map((item, i) => (
                 <li key={i}>
                   <FaShoppingCart className="list-icon" />
                   {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
      <style jsx>{`
        .strategy-grid {
           display: grid; 
           grid-template-columns: 1fr 1fr; 
           gap: 3rem;
           margin-top: 3rem;
        }

        .strategy-col {
           background: #ffffff; /* Use white but with a nice shadow */
           padding: 0; /* Removing padding from container to let items breathe, or keep transparent */
           background: transparent;
        }

        .col-header {
          background: var(--primary);
          padding: 2rem;
          border-radius: var(--radius-lg);
          color: white;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 51, 102, 0.3);
        }

        .col-header::before {
           content: '';
           position: absolute;
           top: 0; left: 0; right: 0; bottom: 0;
           background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
        }

        .col-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }
        
        .col-header .icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          margin-bottom: 1rem;
          width: 48px;
          height: 48px;
        }

        .col-header .col-desc {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0;
          font-size: 1rem;
          max-width: 90%;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .strategy-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .strategy-list li {
          background: #ffffff;
          padding: 1.2rem 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          color: var(--foreground);
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .strategy-list li:hover {
          transform: translateX(5px);
          border-color: var(--accent);
          box-shadow: 0 10px 20px rgba(56, 189, 248, 0.15);
        }

        .strategy-list li :global(.list-icon) {
          color: var(--cta); /* Use Orange for list icons to pop */
          flex-shrink: 0;
          font-size: 1.1rem;
        }

        @media (max-width: 900px) {
           .strategy-grid {
             grid-template-columns: 1fr;
             gap: 3rem;
           }
        }
      `}</style>
    </section>
  );
}
