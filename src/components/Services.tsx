'use client';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  { id: '01', title: 'Contact Centre Operations' },
  { id: '02', title: 'Business Process Outsourcing (BPO)' },
  { id: '03', title: 'Growth Enablement Services' },
  { id: '04', title: 'Customer Experience & Transformation' },
  { id: '05', title: 'Technology & Systems Integration' },
  { id: '06', title: 'Contact Centre Setup & Consulting' },
  { id: '07', title: 'Governance, Risk & Quality' }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header-wrapper">
           <h2 className="section-header">
             Enterprise Service <span className="text-primary-gradient">Portfolio</span>
           </h2>
        </div>
        
        <div className="services-grid">
           <div className="services-list-col">
             <p className="section-description">
               Eight 8 Communication & Business Services delivers integrated enterprise solutions designed to support organizational performance, risk management, operational scalability, and customer lifecycle management.
             </p>
             
             <div className="service-list">
               {services.map((s) => (
                 <div key={s.id} className="service-item">
                    <span className="service-id">{s.id}</span>
                    <span className="service-title">{s.title}</span>
                    <FaArrowRight className="service-icon" />
                 </div>
               ))}
             </div>
           </div>
           
           <div className="services-cta-col">
              <div className="card cta-card">
                <div className="cta-label">Looking for</div>
                <h3 className="cta-title">Operational Excellence?</h3>
                <div className="cta-footer">
                  <span>Explore our solutions</span>
                  <div className="icon-circle">
                    <FaArrowRight size={12} />
                  </div>
                </div>
              </div>
              
              <div className="card cta-card highlight-card text-white ">
                <div className="cta-label" style={{ opacity: 0.9 , color: 'white'}}>Ready to scale?</div>
                <div className="cta-footer">
                  <span style={{ fontWeight: 700, color: 'white' }}>Engage with us</span>
                  <div className="icon-circle dark">
                    <FaArrowRight size={12} />
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
      
      <style jsx>{`
         .section-header-wrapper {
           margin-bottom: 3rem;
         }

         .section-header {
           font-size: 2.5rem;
           font-weight: 700;
         }



         .services-grid {
           display: grid; 
           grid-template-columns: 1fr 1fr; 
           gap: 4rem;
         }

         .section-description {
           color: var(--text-muted); 
           margin-bottom: 2rem;
           font-size: 1.1rem;
           line-height: 1.6;
         }

         .service-list {
           display: flex; 
           flex-direction: column; 
           gap: 1rem;
         }

         .service-item {
           display: flex;
           align-items: center;
           padding: 1.5rem 2rem;
           border: 1px solid var(--surface-border);
           border-radius: var(--radius-pill);
           cursor: pointer;
           transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
           background: transparent;
         }

         .service-item:hover {
           border-color: var(--primary);
           background: rgba(56, 189, 248, 0.1);
           transform: translateX(10px);
         }

         .service-id {
           color: var(--primary);
           margin-right: 1.5rem; 
           fontWeight: 600;
           font-family: monospace;
           font-size: 1.1rem;
         }

         .service-title {
           flex: 1; 
           font-weight: 500;
           font-size: 1.1rem;
         }

         .service-icon {
           opacity: 0.5;
           transition: transform 0.3s ease;
         }
         
         .service-item:hover .service-icon {
           opacity: 1;
           color: var(--primary);
           transform: translateX(5px);
         }

         .services-cta-col {
           display: flex; 
           flex-direction: column; 
           gap: 1.5rem; 
           justify-content: center;
         }

         .cta-card {
           padding: 2.5rem;
           cursor: pointer;
         }
         
         .highlight-card {
           background: var(--primary);
           color: black;
           border: none;
         }
         
         .highlight-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
         }

         .cta-label {
           font-size: 0.9rem; 
           color: var(--text-muted); 
           margin-bottom: 0.5rem;
         }
         
         .highlight-card .cta-label {
           color: rgba(0,0,0,0.7);
         }

         .cta-title {
           font-size: 1.4rem; 
           margin-bottom: 1.5rem;
           line-height: 1.2;
         }

         .cta-footer {
           display: flex; 
           justify-content: space-between; 
           align-items: center;
           margin-top: auto;
         }

         .icon-circle {
           width: 36px; 
           height: 36px; 
           background: var(--surface-hover); 
           border-radius: 50%;
           display: flex; 
           align-items: center; 
           justify-content: center;
           color: var(--foreground);
         }
         
         .icon-circle.dark {
           background: black;
           color: white;
         }

         @media(max-width: 900px) {
           .services-grid {
             grid-template-columns: 1fr;
             gap: 3rem;
           }
         }
      `}</style>
    </section>
  );
}
