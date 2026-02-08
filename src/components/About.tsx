'use client';
import Image from 'next/image';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="header-container">
           <span className="sub-header">Who We Are</span>
           <h2 className="section-title">
             Global <span className="text-primary-gradient">Enterprise Services</span>
           </h2>
           <div className="header-line"></div>
        </div>

        <div className="content-grid">
           
           {/* Left Col: Description & Partnership */}
           <div className="left-col">
              <div className="text-content">
                <h3 className="content-title">Transforming Business Operations</h3>
                <p className="desc-text">
                  Eight 8 Communication & Business Services enables businesses to achieve operational excellence, scalable growth, and sustainable performance through structured service delivery models, governance-driven operations, and technology-enabled solutions.
                </p>
                <p className="desc-text">
                  Our organization operates with dedicated in-house professional teams, ensuring complete operational control, service consistency, regulatory alignment, data security, and performance accountability.
                </p>
              </div>

              {/* Partnership Statement - High Contrast */}
              <div className="partnership-card">
                <div className="bg-icon">
                   <FaHandshake />
                </div>
                <h4 className="card-title-small">
                   <FaHandshake className="icon-highlight" /> Strategic Partnership
                </h4>
                <p className="card-desc-light">
                  We operate as a long-term enterprise services partner, delivering stability, performance, governance, and sustainable value creation for organizations worldwide.
                </p>
              </div>
           </div>
           
           {/* Right Col: Mission & Vision Cards */}
           <div className="right-col">
              {/* Mission Card */}
              <div className="info-card">
                 <div className="icon-box">
                    <FaBullseye />
                 </div>
                 <div>
                    <h3 className="card-title">Corporate Mission</h3>
                    <p className="card-desc">
                      To deliver structured, compliant, and scalable business services that enable organizations to achieve operational excellence, customer trust, and long-term enterprise value.
                    </p>
                 </div>
              </div>

              {/* Vision Card */}
              <div className="info-card">
                 <div className="icon-box accent-bg">
                    <FaEye />
                 </div>
                 <div>
                    <h3 className="card-title">Corporate Vision</h3>
                    <p className="card-desc">
                      To establish a globally recognized enterprise services organization built on governance, performance, innovation, and trust.
                    </p>
                 </div>
              </div>

               {/* Stats Row */}
               <div className="stats-row">
                  <div className="stat-box">
                     <div className="stat-number">99%</div>
                     <div className="stat-label">Client Retention</div>
                  </div>
                  <div className="stat-box">
                     <div className="stat-number">24/7</div>
                     <div className="stat-label">Global Support</div>
                  </div>
               </div>
           </div>

        </div>
      </div>

      <style jsx>{`
        .about-section {
          background-color: #ffffff;
        }

        .header-container {
          text-align: center;
          margin-bottom: 4rem;
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
          color: #0f172a; /* Navy 900 */
          line-height: 1.2;
        }
        
        .header-line {
          width: 60px;
          height: 4px;
          background: var(--primary);
          margin: 1.5rem auto 0;
          border-radius: 2px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .left-col, .right-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .content-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b; /* Navy 800 */
          margin-bottom: 1rem;
        }

        .desc-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569; /* Slate 600 */
          margin-bottom: 1.5rem;
        }

        .partnership-card {
           background-color: #0f172a; /* Navy 900 */
           color: white;
           padding: 2.5rem;
           border-radius: 1rem;
           position: relative;
           overflow: hidden;
           box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }

        .bg-icon {
          position: absolute;
          top: -20px;
          right: -20px;
          font-size: 8rem;
          opacity: 0.05;
          color: white;
          pointer-events: none;
        }

        .card-title-small {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-highlight {
          color: var(--primary);
        }

        .card-desc-light {
          color: #cbd5e1; /* Slate 300 */
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          display: flex;
          gap: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: var(--primary);
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .icon-box.accent-bg {
          background: #0ea5e9; /* Sky 500 */
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .card-desc {
          color: #64748b;
          line-height: 1.6;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .stat-box {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .stats-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
