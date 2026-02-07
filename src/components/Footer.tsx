'use client';
import Link from 'next/link';
import { FaArrowRight, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--surface)', 
      paddingTop: '6rem',
      paddingBottom: '2rem',
      borderTop: '1px solid var(--surface-border)'
    }}>
      <div className="container">
        
        {/* Call to Action Section */}
        <div className="cta-section">
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
              Build Resilient <span className="text-primary-gradient">Operations</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              Engage with Eight 8 Communication & Business Services to build resilient operations, intelligent service ecosystems, and scalable growth platforms that support your organization’s long-term objectives.
            </p>
          </div>
          
          <div className="newsletter-box">
            <input 
              type="text" 
              placeholder="Enter your work email" 
              className="newsletter-input"
            />
            <button className="submit-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-grid">
          <div className="brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.03em' }}>Eight 8</span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Eight 8 Communication & Business Services operates as a long-term enterprise services partner, delivering stability, governance, performance, and sustainable value creation for organizations worldwide.
            </p>
            <div className="social-links">
              <Link href="#" className="social-icon"><FaTwitter /></Link>
              <Link href="#" className="social-icon"><FaLinkedin /></Link>
              <Link href="#" className="social-icon"><FaInstagram /></Link>
              <Link href="#" className="social-icon"><FaGithub /></Link>
            </div>
          </div>
          
          <div className="links-col">
            <h4>Solutions</h4>
            <Link href="#">Support Operations</Link>
            <Link href="#">Data Management</Link>
            <Link href="#">Sales Optimization</Link>
            <Link href="#">Virtual Assistants</Link>
          </div>

          <div className="links-col">
            <h4>Company</h4>
            <Link href="#about">About Us</Link>
            <Link href="#process">Our Process</Link>
            <Link href="#careers">Careers</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className="links-col">
            <h4>Legal</h4>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Eight Agency. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .cta-section {
          display: flex; 
          justify-content: space-between; 
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 6rem;
          align-items: center;
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--surface-border);
        }

        .newsletter-box {
           background: var(--background); 
           padding: 0.5rem; 
           border-radius: 50px;
           display: flex;
           align-items: center;
           width: 100%;
           maxWidth: 400px;
           border: 1px solid var(--surface-border);
           transition: border-color 0.3s ease;
           box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .newsletter-box:focus-within {
          border-color: var(--primary);
        }

        .newsletter-input {
          background: transparent; 
          border: none; 
          color: var(--foreground); 
          flex: 1;
          outline: none;
          padding: 0.5rem 1.5rem;
          font-family: var(--font-sans);
          font-size: 1rem;
        }

        .submit-btn {
          background: var(--primary);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
        }

        .footer-grid {
           display: grid;
           grid-template-columns: 2fr 1fr 1fr 1fr;
           gap: 4rem;
           margin-bottom: 4rem;
        }

        .brand-col {
          max-width: 350px;
        }

        .links-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .links-col h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .links-col a {
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .links-col a:hover {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--foreground);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: var(--primary);
          color: black;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--surface-border);
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .footer-bottom a {
          transition: color 0.2s;
        }

        .footer-bottom a:hover {
          color: var(--foreground);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .cta-section {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
