'use client';

const steps = [
  { num: '01', title: 'Consult', desc: 'We analyze your needs and operational gaps.' },
  { num: '02', title: 'Plan', desc: 'Custom BPO strategy tailored to your KPIs.' },
  { num: '03', title: 'Deploy', desc: 'Seamless integration of teams and tech.' },
  { num: '04', title: 'Optimize', desc: 'Continuous monitoring and improvement.' },
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
         <div className="section-heading-center">
           <div className="pre-heading">HOW WE WORK</div>
           <h2 className="section-header">Our Proven <span className="text-primary-gradient">Process</span></h2>
         </div>
         
         <div className="process-steps">
           {/* Line connector for desktop */}
            <div className="process-line"></div>

           {steps.map((step, i) => (
             <div key={i} className="step-item animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="step-circle glass">
                  {step.num}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
             </div>
           ))}
         </div>
      </div>
      <style jsx>{`
        .section-heading-center {
          text-align: center;
          margin-bottom: 4rem;
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

        .process-steps {
           display: flex; 
           flex-wrap: wrap; 
           justify-content: space-between; 
           gap: 2rem;
           position: relative;
        }

        .process-line {
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          height: 2px;
          background: linear-gradient(to right, #333, var(--primary), #333);
          z-index: 0;
          opacity: 0.3;
        }

        .step-item {
          flex: 1 1 200px; 
          position: relative; 
          z-index: 1;
          text-align: center;
        }

        .step-circle {
          width: 100px;
          height: 100px;
          border: 2px solid var(--primary);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          background: var(--surface); /* Fallback */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .step-item:hover .step-circle {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(187, 247, 6, 0.3);
        }

        .step-title {
          font-size: 1.2rem; 
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .step-desc {
          color: var(--text-muted); 
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .process-line { display: none; }
          .process-steps { flex-direction: column; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
