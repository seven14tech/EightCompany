'use client';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { text: "Eight transformed our customer support. Our CSAT scores increased by 40% in just 3 months.", author: "Jane Doe, CEO TechFlow" },
  { text: "The data processing team is incredibly accurate and efficient. Highly recommended partner.", author: "Mark Smith, Ops Lead FinCorp" },
  { text: "Seamless transition and excellent communication. They truly feel like an extension of our team.", author: "Sarah Lee, Founder E-Shop" },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--background), var(--surface))' }}>
       <div className="container">
         <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 700 }}>
           Client <span className="text-primary-gradient">Success Stories</span>
         </h2>
         
         <div className="testimonials-grid">
           {testimonials.map((t, i) => (
             <div key={i} className="card testimonial-card">
               <FaQuoteLeft className="quote-icon" />
               <p className="testimonial-text">
                 "{t.text}"
               </p>
               <div className="testimonial-author">— {t.author}</div>
             </div>
           ))}
         </div>
       </div>

       <style jsx>{`
         .testimonials-grid {
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
            gap: 2rem; 
         }

         .testimonial-card {
           position: relative;
           border: 1px solid var(--surface-border);
           background: #ffffff;
         }
         
         .quote-icon {
           color: var(--primary); 
           font-size: 1.5rem; 
           margin-bottom: 1.5rem; 
           opacity: 0.5;
         }

         .testimonial-text {
           font-size: 1.1rem; 
           line-height: 1.6; 
           marginBottom: 2rem; 
           font-style: italic;
         }

         .testimonial-author {
           font-weight: 600; 
           color: var(--text-muted);
           margin-top: 1.5rem;
         }
       `}</style>
    </section>
  );
}
