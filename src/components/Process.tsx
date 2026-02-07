'use client';

const steps = [
  { num: '01', title: 'Transition', desc: 'Structured transition and transformation programs.' },
  { num: '02', title: 'Onboarding', desc: 'Enterprise onboarding frameworks.' },
  { num: '03', title: 'Operations', desc: 'Governance-driven operational management.' },
  { num: '04', title: 'Account Mgmt', desc: 'Dedicated account management structures.' },
  { num: '05', title: 'Performance', desc: 'Performance governance and reporting models.' },
  { num: '06', title: 'Improvement', desc: 'Continuous improvement programs.' },
  { num: '07', title: 'Scalability', desc: 'Scalability and risk management strategies.' },
];

export default function Process() {
  return (
    <section id="process" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
         <div className="section-heading-center">
           <div className="pre-heading">HOW WE DELIVER</div>
           <h2 className="section-header">Enterprise <span className="text-primary-gradient">Delivery Model</span></h2>
         </div>
         
         <div className="timeline-container">
           {/* Vertical central line */}
           <div className="timeline-line"></div>
           
           {steps.map((step, i) => (
             <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
               <div className="timeline-marker">
                 {step.num}
               </div>
               <div className="timeline-content card">
                 <h3 className="timeline-title">{step.title}</h3>
                 <p className="timeline-desc">{step.desc}</p>
                 {i % 2 === 0 ? <div className="arrow-right "></div> : <div className="arrow-left"></div>}
               </div>
             </div>
           ))}
         </div>
      </div>

      <style jsx>{`
        .section-heading-center {
          text-align: center;
          margin-bottom: 5rem;
        }

        .pre-heading {
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .section-header {
           font-size: 2.5rem;
           font-weight: 700;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 4px;
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }

        .timeline-item {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4rem;
          position: relative;
          width: 100%;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          color: white;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: var(--primary);
          border: 4px solid #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.2);
        }

        .timeline-content {
          width: 42%;
          padding: 2rem;
          background: #fff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--surface-border);
          position: relative;
          transition: transform 0.3s ease;
        }

        .timeline-content:hover {
           transform: translateY(-5px);
           border-color: var(--primary);
           box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* Alternating Logic */
        .timeline-item.left {
          justify-content: flex-start;
        }
        
        .timeline-item.right {
          justify-content: flex-end;
        }
        
        /* Arrows */
        .arrow-right, .arrow-left {
          position: absolute;
          top: 50%;
          width: 0; 
          height: 0; 
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          transform: translateY(-50%);
        }
        
        .timeline-item.left .timeline-content {
          margin-right: auto;
        }
        .timeline-item.left .arrow-right {
          right: -10px;
          border-left: 10px solid #fff; /* Match card bg */
        }
        
        .timeline-item.right .timeline-content {
          margin-left: auto;
        }
        .timeline-item.right .arrow-left {
          left: -10px;
          border-right: 10px solid #fff;
        }
        
        /* Titles & Desc */
        .timeline-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }
        
        .timeline-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }
          
          .timeline-item {
            justify-content: flex-start !important;
            margin-bottom: 3rem;
          }
          
          .timeline-marker {
            left: 30px;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
            font-size: 0.8rem;
          }
          
          .timeline-content {
            width: calc(100% - 70px);
            margin-left: 70px !important;
            margin-right: 0 !important;
          }
          
          .arrow-right { display: none; }
          .arrow-left {
             display: block;
             left: -10px;
             border-right: 10px solid #fff;
          }
        }
      `}</style>
    </section>
  );
}
