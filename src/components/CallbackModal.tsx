'use client';
import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function CallbackModal() {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success('Thank you! We will callback you soon.');
    closeModal();
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        
        <h2 className="modal-title">Get a Callback</h2>
        <p className="modal-subtitle">Fill in your details and our team will reach out to you shortly.</p>
        
        <form onSubmit={handleSubmit} className="callback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              required
              className="form-input"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Request Callback
          </button>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.95);
          padding: 2.5rem;
          border-radius: 24px;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 1.2rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .close-btn:hover {
          color: var(--foreground);
          background: rgba(0,0,0,0.05);
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .modal-subtitle {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .callback-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .form-input {
          padding: 0.8rem 1rem;
          border-radius: 12px;
          border: 1px solid var(--surface-border);
          background: white;
          font-size: 1rem;
          transition: all 0.2s;
          outline: none;
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
