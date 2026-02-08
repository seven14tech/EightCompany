'use client';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useModal } from '@/context/ModalContext';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const { openModal } = useModal();
  
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <Image 
          src="/heropage.jpeg" 
          alt="Background" 
          fill 
          style={{ objectFit: 'cover' }} 
          priority 
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="hero-content-centered">

           
           <h1 className="hero-title text-white">
             <AnimatedText text="Enterprise Communication &" /> <br />
             <span className="text-gradient-light"><AnimatedText text="Business Process Solutions" delay={0.5} /></span>
           </h1>

           <p className="hero-desc text-white-dim">
              Eight 8 Communication & Business Services is a professional **Business Process Outsourcing (BPO)** and **Contact Centre Solutions** provider. We deliver enterprise-grade communication, operations, and process management services to organizations globally.
           </p>
           
           <div className="cta-wrapper centered">
              <button className="btn btn-primary btn-lg" onClick={openModal}>
                Get a Callback <FaArrowRight size={14} style={{ marginLeft: '8px' }}/>
              </button>

           </div>

           <div className="trust-badges glass-panel">
              <div className="trust-item">
                 <span className="trust-val">500+</span>
                 <span className="trust-label">Agents</span>
              </div>
              <div className="divider-light"></div>
              <div className="trust-item">
                 <span className="trust-val">10+</span>
                 <span className="trust-label">Years Exp.</span>
              </div>
              <div className="divider-light"></div>
              <div className="trust-item">
                 <span className="trust-val">24/7</span>
                 <span className="trust-label">Support</span>
              </div>
           </div>
        </div>

      </div>
      
      <style jsx>{`
        .hero-section {
          padding-top: 180px;
          padding-bottom: 100px;
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 15, 40, 0.7), rgba(0, 15, 40, 0.85));
          z-index: 1;
        }

        .hero-content-centered {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }



        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          color: white;
        }

        .text-gradient-light {
          color: #38BDF8;
          display: inline-block;
        }

        .hero-desc {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin-bottom: 3rem;
          max-width: 800px;
        }

        .cta-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        
        .cta-wrapper.centered {
          justify-content: center;
        }

        .btn-lg {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
        }



        .trust-badges {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 2rem 4rem;
          border-radius: 20px;
        }

        .glass-panel {
          background: rgba(0, 30, 60, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .trust-val {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          line-height: 1;
          margin-bottom: 6px;
        }

        .trust-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .divider-light {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 900px) {
          .hero-title {
             font-size: 2.5rem;
          }
          .cta-wrapper {
             flex-direction: column;
             gap: 1rem;
             width: 100%;
          }
           .btn-lg, .btn-outline-light {
             width: 100%;
             justify-content: center;
           }
          .trust-badges {
             flex-direction: column;
             gap: 2rem;
             width: 100%;
             padding: 2rem;
          }
          .divider-light {
             width: 40px;
             height: 1px;
          }
        }
      `}</style>
    </section>
  );
}

function AnimatedText({ text, delay = 0 }: { text: string, delay?: number }) {
  const el = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.7)",
        delay: delay
      });
    }, el);
    return () => ctx.revert();
  }, [delay]);

  return (
    <span ref={el} style={{ display: 'inline-block' }}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.25em' }}>
          {word.split("").map((char, j) => (
             <span key={j} className="char" style={{ display: 'inline-block' }}>
               {char}
             </span>
          ))}
        </span>
      ))}
    </span>
  );
}
