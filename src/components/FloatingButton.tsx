'use client';
import { useModal } from '@/context/ModalContext';
import { FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButton() {
  const { openModal } = useModal();

  return (
    <>
      <button 
        className="floating-btn" 
        onClick={openModal}
        aria-label="Get a Callback"
      >
        <FaPhoneAlt className="icon" />
        <span className="label">Get a Callback</span>
      </button>

      <style jsx>{`
        .floating-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          background: var(--cta);
          color: var(--cta-foreground);
          border: none;
          border-radius: var(--radius-pill);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          font-weight: 600;
          font-size: 1rem;
          overflow: hidden;
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.6);
          padding-left: 1.8rem;
        }

        .icon {
          font-size: 1.1rem;
          animation: wiggle 3s infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          5% { transform: rotate(-10deg); }
          10% { transform: rotate(10deg); }
          15% { transform: rotate(-10deg); }
          20% { transform: rotate(0deg); }
        }

        @media (max-width: 768px) {
          .floating-btn {
            bottom: 20px;
            right: 20px;
            padding: 0.8rem 1.2rem;
            font-size: 0.9rem;
          }
          .label {
            display: none;
          }
          .floating-btn {
            padding: 1rem;
            border-radius: 50%;
            width: 56px;
            height: 56px;
            justify-content: center;
          }
          .icon {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
