'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  // Footer Component Updated
  return (
    <footer style={{ 
      background: 'var(--surface)', 
      paddingTop: '6rem',
      paddingBottom: '2rem',
      borderTop: '1px solid var(--surface-border)'
    }}>
      <div className="container">
        
        {/* Contact Section */}
        <div className="cta-section">
          
          {/* Left: Agent Image on Image with Phone/Email */}
          <div className="contact-image-wrapper group">
             <Image 
               src="/agent.jpg" 
               alt="Contact Agent" 
               width={400} 
               height={300}
               style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }}
             />
             <div className="contact-overlay">
                <div className="contact-detail">
                   <FaEnvelope className="icon-sm" />
                   <a href="mailto:info@eight8.co">info@eight8.co</a>
                </div>
                <div className="contact-detail">
                   <FaPhone className="icon-sm" />
                   <a href="tel:+15550000000">+1 (555) 000-0000</a>
                </div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="contact-content">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Contact <span className="text-primary-gradient">Us</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Engage with Eight 8 Communication & Business Services to build resilient operations, intelligent service ecosystems, and scalable growth platforms that support your organization’s long-term objectives.
            </p>
          </div>

        </div>

        {/* Links Grid */}
        <div className="footer-grid">
          <div className="brand-col">
            <div style={{ marginBottom: '1.5rem' }}>
              <Image 
                src="/logo.png" 
                alt="Eight 8 Logo" 
                width={240} 
                height={80} 
                style={{ width: 'auto', height: '80px', objectFit: 'contain' }}
              />
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
          display: grid; 
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 6rem;
          align-items: center;
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--surface-border);
        }

        .contact-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 320px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid var(--surface-border);
          transform: translateY(-50px);
        }

        .contact-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(15, 23, 42, 0.85); /* Dark overlay */
          backdrop-filter: blur(5px);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .contact-detail a {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-detail a:hover {
          color: var(--primary);
        }
        
        .icon-sm {
           color: var(--primary);
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
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-image-wrapper {
             height: 250px;
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
