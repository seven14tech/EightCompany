'use client';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const progress = { value: 0 };
    const tl = gsap.timeline();

    // Start by animating to 90% slowly to simulate progress
    const initialTween = gsap.to(progress, {
      value: 90,
      duration: 3, 
      ease: 'power1.inOut',
      onUpdate: () => setPercent(Math.round(progress.value))
    });

    const onPageLoad = () => {
      // Stop the initial "fake" loading
      initialTween.kill();

      // Animate from current % to 100% quickly
      gsap.to(progress, {
        value: 100,
        duration: 0.5,
        onUpdate: () => setPercent(Math.round(progress.value)),
        onComplete: () => {
          // Slide out animation
          gsap.to(containerRef.current, {
            y: '-100%',
            duration: 0.8,
            ease: 'power4.inOut',
            delay: 0.2,
            onComplete: () => {
              document.body.style.overflow = 'auto'; // Restore scroll
            }
          });
        }
      });
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Fallback safety timeout (in case of stalled resources)
      setTimeout(() => {
        if (progress.value < 100) onPageLoad();
      }, 5000); 
    }

    return () => {
      window.removeEventListener('load', onPageLoad);
      document.body.style.overflow = 'auto';
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="preloader">
      <div className="loader-content">
        <h1 className="percentage">{percent}%</h1>
        <div className="bar-wrapper">
          <div className="bar" style={{ width: `${percent}%` }}></div>
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #ffffff;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .loader-content {
          text-align: center;
          width: 100%;
          max-width: 400px;
          padding: 2rem;
        }

        .percentage {
          font-size: 8rem;
          font-weight: 900;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 2rem;
          font-variant-numeric: tabular-nums;
        }

        .bar-wrapper {
          width: 100%;
          height: 4px;
          background: #f1f5f9;
          border-radius: 2px;
          overflow: hidden;
        }

        .bar {
          height: 100%;
          background: #0f172a;
          transition: width 0.1s linear;
        }
      `}</style>
    </div>
  );
}
