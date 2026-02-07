'use client';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const team = [
  { name: 'Sarah Jenkins', role: 'Head of Business Transformation', exp: 'Lean Six Sigma Black Belt' },
  { name: 'David Chen', role: 'Process Innovation Lead', exp: '12+ Years in BPO' },
  { name: 'Priya Patel', role: 'Automation Architect', exp: 'RPA & AI Specialist' },
  { name: 'James Wilson', role: 'Quality & Compliance Director', exp: 'ISO 9001 Lead Auditor' },
];

export default function Team() {
  return (
    <section id="team" className="section-padding">
      <div className="container">
        <div className="section-header-wrapper">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Meet our <span className="highlight">BPI Experts</span>
          </h2>
          
           <div className="pill-badge">
           BPI Experts
           </div>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="card team-card">
               <div className="avatar-placeholder">
                 <Image src="/agent.jpg" alt={member.name} fill style={{ objectFit: 'cover' }} loading="lazy" />
               </div>
               
               <h3 className="member-name">{member.name}</h3>
               <p className="member-role">{member.role}</p>
               
               <div className="member-exp">
                 {member.exp}
               </div>
               
               <div className="social-row">
                 <FaLinkedin className="social-icon" />
                 <FaTwitter className="social-icon" />
               </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-header-wrapper {
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .highlight {
          background: var(--primary);
          color: black;
          padding: 0 0.5rem;
          border-radius: 8px;
        }

        .pill-badge {
          padding: 0.5rem 1rem; 
          background: var(--surface); 
          border: 1px solid var(--surface-border);
          border-radius: 50px; 
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .team-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
          gap: 1.5rem;
        }

        .team-card {
          text-align: center;
          cursor: pointer;
        }
        
        .team-card:hover {
          border-color: var(--primary);
          transform: translateY(-8px);
        }

        .avatar-placeholder {
          width: 80px; 
          height: 80px; 
          background: #333; 
          border-radius: 24px; 
          margin: 0 auto 1.5rem;
          overflow: hidden;
          transition: transform 0.3s ease;
          position: relative;
        }
        
        .team-card:hover .avatar-placeholder {
          transform: scale(1.1);
        }

        .member-name {
          font-size: 1.1rem; 
          margin-bottom: 0.2rem;
        }

        .member-role {
          font-size: 0.85rem; 
          color: var(--text-muted); 
          margin-bottom: 1rem;
        }

        .member-exp {
          font-size: 0.75rem; 
          color: var(--text-dim); 
          margin-bottom: 1.5rem;
        }

        .social-row {
          display: flex; 
          justify-content: center; 
          gap: 1rem;
        }

        .social-icon {
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s;
        }

        .social-icon:hover {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}
