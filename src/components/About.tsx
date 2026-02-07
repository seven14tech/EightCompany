'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="about-grid">
           <div className="about-content">
              <h2 className="section-header">
                Seamless <span className="text-primary-gradient">Integration</span><br /> 
                Superior Results
              </h2>
              <p className="about-description">
                We are more than just a call center; we are your strategic partner in growing your business. Our agile teams integrate perfectly with your operations to deliver customer experiences that foster loyalty and retention.
              </p>
              
              <div className="stats-grid">
                 <div className="stat-item">
                   <div className="stat-value">98%</div>
                   <div className="stat-label">CSAT Score</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-value">24/7</div>
                   <div className="stat-label">Availability</div>
                 </div>
              </div>

              <div className="badge">
                PREMIUM BPO SOLUTIONS
              </div>
           </div>
           
           <div className="about-images">
              <div className="image-card primary-img">
                <Image src="/agent2.jpg" alt="Team collaboration" fill style={{ objectFit: 'cover' }} loading="lazy" />
                <div className="overlay"></div>
              </div>
              <div className="image-card secondary-img">
                <Image src="/agent3.jpg" alt="Office environment" fill style={{ objectFit: 'cover' }} loading="lazy" />
                <div className="overlay"></div>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .section-header {
          font-size: 3rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .about-description {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-dim);
        }

        .badge {
           display: inline-block;
           padding: 1rem 1.5rem; 
           background: rgba(168, 224, 5, 0.1); 
           color: var(--primary); 
           border: 1px solid var(--primary);
           border-radius: var(--radius-pill);
           font-weight: 600;
           letter-spacing: 0.05em;
           font-size: 0.8rem;
        }

        .about-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          height: 400px;
        }

        .image-card {
          border-radius: var(--radius-md);
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          background-color: var(--surface-hover);
        }
        
        .primary-img {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          background-image: linear-gradient(135deg, #e4e4e7, #d4d4d8);
        }

        .secondary-img {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          background-image: linear-gradient(135deg, #f4f4f5, #e4e4e7);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-images {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
