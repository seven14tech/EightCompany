'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="about-grid">
           <div className="about-content">
              <div className="badge" style={{ marginBottom: '1.5rem' }}>
                CORPORATE VALUE PROPOSITION
              </div>
              <h2 className="section-header">
                Transforming Complexity into <span className="text-primary-gradient">Scalable Performance</span>
              </h2>
              <div className="about-description">
                <p style={{ marginBottom: '1.5rem' }}>
                  We partner with organizations to transform operational complexity into structured, efficient, and scalable business systems by delivering integrated enterprise solutions across people, process, and technology.
                </p>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.5rem' }}>Corporate Mission</h3>
                <p>
                  To deliver structured, compliant, and scalable business services that enable organizations to achieve operational excellence, customer trust, and long-term enterprise value.
                </p>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '1.5rem 0 0.5rem' }}>Corporate Vision</h3>
                <p>
                  To establish a globally recognized enterprise services organization built on governance, performance, innovation, and trust.
                </p>
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
           background: rgba(56, 189, 248, 0.1); 
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
