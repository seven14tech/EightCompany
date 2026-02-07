'use client';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useModal } from '@/context/ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className="hero-section">
      <div className="glow-effect"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Star Icon */}
        <div className="star-icon">
          ✸
        </div>

        <h1 className="hero-title">
          Enterprise Communication & <span className="text-primary-gradient">Business Process Solutions</span>
        </h1>

        <div className="hero-content">
          <div className="hero-text">
            <p>
              Eight 8 Communication & Business Services is a professional Business Process Outsourcing (BPO) and Contact Centre Solutions organization delivering enterprise-grade communication, operational management, and process optimization services to organizations worldwide.
            </p>
            
            <div className="cta-group">
               <button className="btn btn-primary" onClick={openModal}>
                 Get a Callback
               </button>
               <button className="btn btn-outline">
                 Our Solutions
               </button>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
             <Image 
               src="/agent.jpg" 
               alt="Expert BPI Agent" 
               fill 
               style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
               priority
             />
             
             {/* Floating badge */}
             <div className="floating-badge glass">
                <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>99.9%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SLA Uptime</div>
             </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar animate-fade-in" style={{ animationDelay: '0.5s' }}>
           <Stat number="500+" label="Agents" />
           <Stat number="10+" label="Years Exp." />
           <Stat number="24/7" label="Support Coverage" />
           <Stat number="1M+" label="Calls Handled" />
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          padding-top: 180px;
          padding-bottom: 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .glow-effect {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        .star-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 2rem;
          animation: spin 10s linear infinite;
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 1.05;
          margin-bottom: 3rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 700;
        }

        .hero-content {
          display: flex;
          justify-content: center;
          align-items: center; 
          gap: 4rem; 
          margin-bottom: 6rem;
          flex-wrap: wrap;
          text-align: left;
        }

        .hero-text {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
        }
        
        .hero-text p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%; 
          max-width: 400px;
          height: 450px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--surface-border);
          padding: 10px;
          background: #ffffff;
          transform: rotate(2deg);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .hero-image-wrapper:hover {
          transform: rotate(0deg);
        }

        .hero-image-placeholder {
           width: 100%;
           height: 100%;
           background: linear-gradient(135deg, #f4f4f5, #e4e4e7);
           border-radius: 16px;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--text-muted);
           font-weight: 500;
        }

        .floating-badge {
          position: absolute;
          bottom: 30px;
          left: -30px;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 140px;
          background: rgba(255, 255, 255, 0.9);
        }

        .stats-bar {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 3rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }
          .hero-text {
            text-align: center;
            max-width: 100%;
          }
          .cta-group {
            justify-content: center;
          }
          .floating-badge {
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
          }
        }
      `}</style>
    </section>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--foreground)', lineHeight: 1 }}>{number}</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 500 }}>{label}</div>
    </div>
  )
}
