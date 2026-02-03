'use client';
import { FaHeartbeat, FaChartLine, FaShoppingCart, FaPlane } from 'react-icons/fa';

const industries = [
  { name: 'Healthcare', icon: FaHeartbeat, desc: 'Patient support & billing' },
  { name: 'Finance', icon: FaChartLine, desc: 'Secure data processing' },
  { name: 'E-commerce', icon: FaShoppingCart, desc: 'Order & chat support' },
  { name: 'Travel', icon: FaPlane, desc: 'Booking & reservations' },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700 }}>
          Industries We <span className="text-primary-gradient">Empower</span>
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
           grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
           gap: 2rem;
        }

        .industry-card {
           text-align: center;
           padding: 3rem 2rem;
           background: #ffffff;
        }
        
        .industry-card:hover {
           border-color: var(--primary);
           transform: translateY(-8px);
        }

        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: inline-flex;
          padding: 1rem;
          background: rgba(168, 224, 5, 0.1);
          border-radius: 50%;
        }

        .industry-name {
          font-size: 1.25rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .industry-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
