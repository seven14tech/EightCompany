'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: scrolled ? '20px' : '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: '90%',
          maxWidth: '1200px',
          padding: '0.5rem 1.5rem',
          borderRadius: 'var(--radius-pill)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.4s ease',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/logo.png" 
            alt="Eight 8 Logo" 
            width={200} 
            height={60} 
            style={{ width: 'auto', height: '60px', objectFit: 'contain', mixBlendMode: 'multiply' }}
            priority
          />
        </Link>

        <div className="nav-links">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#industries" className="nav-link">Industries</Link>
          <Link href="#process" className="nav-link">Process</Link>
        </div>

        <div className="desktop-actions" style={{ display: 'none' }}></div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link href="#about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
          <Link href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</Link>
          <Link href="#industries" className="mobile-nav-link" onClick={closeMenu}>Industries</Link>
          <Link href="#process" className="mobile-nav-link" onClick={closeMenu}>Process</Link>

        </div>
      </div>

      <style jsx>{`
        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        
        .nav-link {
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--foreground);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #000000; /* Force black for visibility */
          cursor: pointer;
          z-index: 1001; /* High z-index */
          padding: 5px;
        }

        @media (max-width: 768px) {
           nav {
             width: 95%;
             padding: 0.8rem 1rem !important;
             top: 10px !important;
           }
           .nav-links, .desktop-actions {
             display: none;
           }
           .mobile-toggle {
             display: block !important;
           }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          z-index: 90;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
          width: 80%;
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .mobile-nav-link:hover {
          color: var(--primary);
        }
      `}</style>
    </>
  );
}
